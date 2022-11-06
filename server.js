const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const { connect } = require('./helper/connection');
const users = require('./routes/api/user');
const challenges = require('./routes/api/challenge');

const app = express();

try {
  connect();
} catch (error) {
  console.log('Error connecting to the database');
}
// body parser
app.use(bodyParser.json());
app.use(cors())

const PORT = process.env.PORT || 8000;

app.use('/api/users/', users);
app.use('/api/challenge', challenges);


// disconnect from database when server disconnects
process.on('SIGINT', () => {
  disconnect();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
