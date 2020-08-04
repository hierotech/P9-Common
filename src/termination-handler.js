async function _terminateWsServer(wss) {
  return new Promise(resolve => {
    wss.close(resolve);
  });
}

class TerminationHandler {
  constructor(options = {}) {
    const {
      forcedTerminationTimeout = 14 * 1000,
      gracefulTerminationTimeout = 10 * 1000,
      terminationSignals = ['SIGTERM', 'SIGINT']
    } = options;

    this._forcedTerminationTimeout = forcedTerminationTimeout;
    this._gracefulTerminationTimeout = gracefulTerminationTimeout;
    this._amqpInstances = new Set();
    this._firebaseAdminAppInstances = new Set();
    this._httpServerInstances = new Map();
    this._knexInstances = new Set();
    this._redisInstances = new Set();
    this._wsServerInstances = new Set();

    terminationSignals.forEach(signal => {
      process.on(signal, this._handleTermination);
    });
  }

  attachAmqpInstance(instance) {
    this._amqpInstances.add(instance);
  }

  attachFirebaseAdminAppInstance(instance) {
    this._firebaseAdminAppInstances.add(instance);
  }

  attachHttpServer(server) {
    // This way it is not required as a dependency if the method is not used
    const {createHttpTerminator} = require('http-terminator');

    this._httpServerInstances.set(server, createHttpTerminator({
      server,
      gracefulTerminationTimeout: this._gracefulTerminationTimeout
    }));
  }

  attachKnexInstance(instance) {
    this._knexInstances.add(instance);
  }

  attachRedisInstance(instance) {
    this._redisInstances.add(instance);
  }

  attachWsServer(server) {
    this._wsServerInstances.add(server);
  }

  _handleTermination = () => {
    Promise.all([
      this._terminateHttpServerInstances(),
      this._terminateWsServerInstances()
    ]).then(() => {
      return Promise.all([
        this._terminateAmqpInstances(),
        this._terminateFirebaseAdminAppInstances(),
        this._terminateKnexInstances(),
        this._terminateRedisInstances()
      ]);
    }).then(() => {
      process.exit(0);
    });

    setTimeout(() => {
      process.exit(1);
    }, this._forcedTerminationTimeout);
  };

  async _terminateAmqpInstances() {
    return Promise.allSettled(Array.from(this._amqpInstances).map(instance => instance.close()));
  }

  async _terminateFirebaseAdminAppInstances() {
    return Promise.allSettled(Array.from(this._firebaseAdminAppInstances).map(instance => instance.delete()));
  }

  async _terminateHttpServerInstances() {
    const terminators = Array.from(this._httpServerInstances.values());

    return Promise.allSettled(terminators.map(terminator => terminator.terminate()));
  }

  async _terminateKnexInstances() {
    return Promise.allSettled(Array.from(this._knexInstances).map(instance => instance.destroy()));
  }

  async _terminateRedisInstances() {
    return Promise.allSettled(Array.from(this._redisInstances).map(instance => instance.quit()));
  }

  async _terminateWsServerInstances() {
    return Promise.all(Array.from(this._wsServerInstances).map(_terminateWsServer));
  }
}

export default TerminationHandler;
