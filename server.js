const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { connect, disconnect } = require('./helper/connection')

// routes.
const items = require('./routes/api/items');
const auth = require('./routes/auth');
const students = require('./routes/api/student')
const users = require('./routes/api/user')
const challenges = require('./routes/api/challenge')

const app = express();

try {
  connect();
} catch (error) {
  console.log('Error connecting to the database');
}

// body parser
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use('/api/items', items);
app.use('/api/students', students); // need to remove this
app.use('/api/users', users);
app.use('/api/challenge', challenges);
app.use('/api/auth/', auth);

// disconnect from database when server disconnects
process.on('SIGINT', () => {
	disconnect()
	process.exit(0)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
