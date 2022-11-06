'use strict'

const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})

function connect() {
	const config = {
		useNewUrlParser: true, 
        useUnifiedTopology: true 
	}
	const dbUrl = process.env.DB_URI
	return mongoose.connect(dbUrl, config)
}

function disconnect() {
    return mongoose.connection.close()
} 

module.exports = {connect, disconnect}