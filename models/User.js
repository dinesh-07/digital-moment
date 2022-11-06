
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	areaofintrest: { type: String, default: false },
	email: { type: String, required: true, validate: validator.isEmail },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now()},
})

const User = mongoose.model('User', userSchema)

module.exports = User