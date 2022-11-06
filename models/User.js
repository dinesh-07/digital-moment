
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, validate: validator.isEmail },
	password: { type: String, required: true },
	isAdmin: { type: Boolean, required: true },
	createdAt: { type: Date, default: Date.now()},
})

const User = mongoose.model('User', userSchema)

module.exports = User