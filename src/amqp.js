import amqplib from 'amqplib';
import merge from 'lodash.merge';

export const DEFAULT_CONFIG = {
  exchange: {
    consume: {
      type: 'fanout'
    },
    publish: {
      type: 'fanout'
    }
  },
  reconnectionDelay: 10 * 1000
};

const TEMPORARY_QUEUE = [];

let config = null;
let consumeChannel = null;
let publishChannel = null;
let subscriptionCallback = null;
let isHandlingClose = false;

const _handleMessage = channel => async message => {
  try {
    await channel.ack(message);

    if (!message || !message.content) {
      console.warn('[amqp::_handleMessage]', 'Invalid message from queue', message);

      return;
    }

    if (!subscriptionCallback) {
      console.warn('[amqp::_handleMessage]', 'No message subscription');

      return;
    }

    const {type, data} = JSON.parse(message.content.toString());

    await subscriptionCallback(type, data);
  } catch (err) {
    console.warn(err);
  }
};

async function _initConsume(connection) {
  const channel = await connection.createChannel();

  const {queue} = await channel.assertQueue(null, {autoDelete: true});

  const {name, type} = config.exchange.consume;

  await channel.assertExchange(name, type);
  await channel.bindQueue(queue, name);
  await channel.consume(queue, _handleMessage(channel));

  return channel;
}

async function _initPublish(connection) {
  const channel = await connection.createChannel();

  const {name, type} = config.exchange.publish;

  await channel.assertExchange(name, type);

  return channel;
}

async function _init() {
  const connection = await amqplib.connect(config.connection.url);

  consumeChannel = await _initConsume(connection);
  publishChannel = await _initPublish(connection);

  connection.on('close', _handleClose);
  connection.on('error', err => console.error('[amqp::_init::connection.on(\'error\')]', err));

  if (TEMPORARY_QUEUE.length > 0) {
    console.log('[amqp::_init]', 'Flushing temporary queue...');
  }

  while (TEMPORARY_QUEUE.length > 0) {
    const {message, toConsumeChannel} = TEMPORARY_QUEUE.shift();

    // eslint-disable-next-line no-await-in-loop
    await publish(message, toConsumeChannel);
  }

  console.log('[amqp::_init]', 'Connection established');
}

function _handleClose() {
  if (isHandlingClose) {
    return;
  }

  isHandlingClose = true;

  consumeChannel = null;
  publishChannel = null;

  console.error(
    '[amqp::_handleClose]',
    `Connection failed or lost. Reconnecting in ${config.reconnectionDelay} msecs...`
  );

  setTimeout(async () => {
    try {
      await _init();

      isHandlingClose = false;
    } catch (err) {
      console.error('[amqp::_handleClose::setTimeout]', err);

      isHandlingClose = false;

      _handleClose();
    }
  }, config.reconnectionDelay);
}

/**
 * Initializes AMQP client. Must be invoked before any other module methods usage.
 *
 * @param {object} conf AMQP configuration
 * @param {object} conf.connection AMQP connection configuration
 * @param {string} conf.connection.url AMQP connection url
 * @param {object} conf.exchange Exchanges configuration
 * @param {object} conf.exchange.consume Consume exchange configuration
 * @param {string} conf.exchange.consume.name Consume exchange name
 * @param {string} [conf.exchange.consume.type=fanout] Consume exchange type
 * @param {object} conf.exchange.publish Publish exchange configuration
 * @param {string} conf.exchange.publish.name Publish exchange name
 * @param {string} [conf.exchange.publish.type=fanout] Publish exchange type
 * @param {number} [conf.reconnectionDelay=10000] Delay in milliseconds before a client tries to reconnect
 * after connection loss
 *
 * @returns {Promise<void>}
 */
export async function init(conf) {
  config = merge({}, DEFAULT_CONFIG, conf);

  await _init();
}

export async function publish(message, toConsumeChannel = false) {
  if (!config) {
    throw new Error('[amqp::publish] client is not initialized');
  }

  const channel = toConsumeChannel ? consumeChannel : publishChannel;

  if (!channel) {
    TEMPORARY_QUEUE.push({message, toConsumeChannel});

    return;
  }

  const exchangeName = config.exchange[toConsumeChannel ? 'consume' : 'publish'].name;

  await channel.publish(exchangeName, '', Buffer.from(JSON.stringify(message)));
}

export function subscribe(callback) {
  subscriptionCallback = callback;
}

export async function broadcast(data) {
  await publish({
    data: {
      type: 'broadcast',
      data: {data}
    },
    type: 'notification'
  }, true);
}

export async function send(receiverId, data) {
  await publish({
    data: {
      type: 'send',
      data: {receiverId, data}
    },
    type: 'notification'
  }, true);
}
