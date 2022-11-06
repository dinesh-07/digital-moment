const { logger } = require('express-winston');
const { format, transports } = require('winston');

module.exports = (req, res, next) => {
  return logger({
    transports: [
      new transports.Console({
        format: format.combine(format.timestamp(), format.json()),
      }),
    ],
    level: 'info',
    meta: true,
    metaField: 'meta',
    msg: 'HTTP {{req.method}} {{req.url}}',
  })(req, res, next);
};
