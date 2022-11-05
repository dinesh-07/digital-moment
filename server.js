const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {connect} = require('./helper/connection')
const students = require('./routes/api/student')
const auth = require('./routes/auth');
const api = require('./routes/api/items');

const app = express();

try {
  connect()
}catch(error) {
  console.log("Error connecting to the database")
}
// body parser
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use('/api/auth/', auth);
app.use('/api/items', api);
app.use('/api/students', students)

// disconnect from database when server disconnects
process.on('SIGINT', () => {
	disconnect()
	process.exit(0)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
