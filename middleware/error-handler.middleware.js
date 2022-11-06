const logger = require('../lib/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.name, { url: req.url, message: err.message });
  res.status(400).json({
    type: 'Bad Request',
    detail: err.message,
    meta: {},
  });
  next();
};
