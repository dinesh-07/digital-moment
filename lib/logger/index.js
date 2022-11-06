const winston = require('winston');
const transports = winston.transports;
const format = winston.format;

class Logger {
  logger = winston.createLogger({
    transports: [new transports.Console({ format: format.combine(format.timestamp(), format.json()) })],
  });

  info(message, meta = {}) {
    this.logger.log('info', message, { meta: meta });
  }

  debug(message, meta = {}) {
    this.logger.log('debug', message, { meta: meta });
  }

  warn(message, meta = {}) {
    this.logger.log('warn', message, { meta: meta });
  }

  error(message, meta = {}) {
    this.logger.log('error', message, { meta: meta });
  }
}

module.exports = new Logger();
