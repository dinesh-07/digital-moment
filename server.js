const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connect, disconnect } = require('./helper/connection');

const users = require('./routes/users');
const challenges = require('./routes/challenges');
const auth = require('./routes/auth');

const errorHandlerMiddleware = require('./middleware/error-handler.middleware');
const loggerMiddleware = require('./middleware/logger.middleware');

const app = express();

try {
  connect();
} catch (error) {
  console.log('Error connecting to the database');
}
// body parser
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use('/api/users/', users);
app.use('/api/challenges/', challenges);
app.use('/api/auth', auth);

// disconnect from database when server disconnects
process.on('SIGINT', () => {
  disconnect();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(errorHandlerMiddleware);
