
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	name: { type: String,required: true },
	areaofintrest: { type: String, default: false },
	email: { type: String, required: true, validate: validator.isEmail },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now()},
})

userSchema.pre('save', async function(next) {
	const unencryptedPassword = this.password
	const saltRound = 10
	const encryptedPassword = await bcrypt.hash(unencryptedPassword, saltRound)
	this.password = encryptedPassword
	next()
})

const User = mongoose.model('User', userSchema)

module.exports = User