import amqplib from 'amqplib';
import merge from 'lodash.merge';

export default class AmqpClient {
  static get DEFAULT_CONFIG() {
    return {
      exchange: {
        consume: {
          type: 'fanout'
        },
        publish: {
          type: 'fanout'
        }
      },
      reconnectionDelay: 10 * 1000,
      sendToConsumeChannel: false
    };
  }

  /**
   * Creates and instance of AmqpClient.
   *
   * @param {object} config Client configuration
   * @param {object} config.connection Connection configuration
   * @param {string} config.connection.url Connection url
   * @param {object} config.exchange Exchanges configuration
   * @param {object} config.exchange.consume Consume exchange configuration
   * @param {string} config.exchange.consume.name Consume exchange name
   * @param {string} [config.exchange.consume.type=fanout] Consume exchange type
   * @param {object} config.exchange.publish Publish exchange configuration
   * @param {string} config.exchange.publish.name Publish exchange name
   * @param {string} [config.exchange.publish.type=fanout] Publish exchange type
   * @param {number} [config.reconnectionDelay=10000] Delay in milliseconds before a client tries to reconnect
   * @param {boolean} [config.sendToConsumeChannel=false] Send/broadcast to consume channel
   * after connection loss
   *
   * @returns {Promise<void>}
   */
  constructor(config) {
    this._config = merge({}, AmqpClient.DEFAULT_CONFIG, config);
    this._temporaryQueue = [];
    this._consumeChannel = null;
    this._publishChannel = null;
    this._isHandlingClose = false;
    this._handlers = new Map();
  }

  async init({throwOnError = false} = {}) {
    try {
      await this._init();
    } catch (err) {
      if (throwOnError) {
        throw err;
      }

      console.error('[AmqpClient.init]', err);

      this._handleClose();
    }
  }

  installHandler(type, handler) {
    this._handlers.set(type, handler);
  }

  async publish(message, toConsumeChannel = false) {
    if (!this._config) {
      throw new Error('[AmqpClient.publish] Client is not initialized');
    }

    const channel = toConsumeChannel ? this._consumeChannel : this._publishChannel;

    if (!channel) {
      this._temporaryQueue.push({message, toConsumeChannel});

      return;
    }

    const exchangeName = this._config.exchange[toConsumeChannel ? 'consume' : 'publish'].name;

    await channel.publish(exchangeName, '', Buffer.from(JSON.stringify(message)));
  }

  async broadcast(data) {
    await this.publish({
      data: {
        type: 'broadcast',
        data: {data}
      },
      type: 'notification'
    }, this._config.sendToConsumeChannel);
  }

  async send(receiverId, data) {
    await this.publish({
      data: {
        type: 'send',
        data: {receiverId, data}
      },
      type: 'notification'
    }, this._config.sendToConsumeChannel);
  }

  _handleMessage = channel => async message => {
    try {
      await channel.ack(message);

      if (!message || !message.content) {
        console.warn('[AmqpClient._handleMessage]', 'Invalid message from queue', message);

        return;
      }

      const {type, data} = JSON.parse(message.content.toString());

      const handler = this._handlers.get(type);

      if (!handler) {
        console.warn('[AmqpClient._handleMessage]', `No handler for type: "${type}", data:`, data);

        return;
      }

      await handler(data, type);
    } catch (err) {
      console.warn(err);
    }
  };

  async _initConsume(connection) {
    const channel = await connection.createChannel();

    const {queue} = await channel.assertQueue(null, {autoDelete: true});

    const {name, type} = this._config.exchange.consume;

    await channel.assertExchange(name, type);
    await channel.bindQueue(queue, name);
    await channel.consume(queue, this._handleMessage(channel));

    return channel;
  }

  async _initPublish(connection) {
    const channel = await connection.createChannel();

    const {name, type} = this._config.exchange.publish;

    await channel.assertExchange(name, type);

    return channel;
  }

  async _init() {
    const connection = await amqplib.connect(this._config.connection.url);

    this._consumeChannel = await this._initConsume(connection);
    this._publishChannel = await this._initPublish(connection);

    connection.on('close', this._handleClose);
    connection.on('error', err => console.error('[AmqpClient._init::connection.on(\'error\')]', err));

    if (this._temporaryQueue.length > 0) {
      console.log('[AmqpClient._init]', 'Flushing temporary queue...');
    }

    while (this._temporaryQueue.length > 0) {
      const {message, toConsumeChannel} = this._temporaryQueue.shift();

      // eslint-disable-next-line no-await-in-loop
      await this.publish(message, toConsumeChannel);
    }

    console.log('[AmqpClient._init]', 'Connection established');
  }

  _handleClose = () => {
    if (this._isHandlingClose) {
      return;
    }

    this._isHandlingClose = true;

    this._consumeChannel = null;
    this._publishChannel = null;

    console.error(
      '[AmqpClient._handleClose]',
      `Connection failed or lost. Reconnecting in ${this._config.reconnectionDelay} msecs...`
    );

    setTimeout(async () => {
      try {
        await this._init();

        this._isHandlingClose = false;
      } catch (err) {
        console.error('[AmqpClient._handleClose::setTimeout]', err);

        this._isHandlingClose = false;

        this._handleClose();
      }
    }, this._config.reconnectionDelay);
  }
}
