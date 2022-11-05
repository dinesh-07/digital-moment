const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {connect} = require('./helper/connection')
const items = require('./routes/api/items');
const students = require('./routes/api/student')

const app = express();

try {
  connect()
  console.log("Connection done")
}catch(error) {
  
  console.log("Error connecting to the database")
}
// body parser
app.use(bodyParser.json());

app.use('/api/items', items)
app.use('/api/students', students)

const PORT = process.env.PORT || 8081;

// disconnect from database when server disconnects
process.on('SIGINT', () => {
	disconnect()
	process.exit(0)
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
