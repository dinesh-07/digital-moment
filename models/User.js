
const mongoose = require('mongoose')
const validator = require('validator')
<<<<<<< HEAD

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
=======
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	name: { type: String,required: true },
>>>>>>> dad2532 (modified idea schema)
	areaofintrest: { type: String, default: false },
	email: { type: String, required: true, validate: validator.isEmail },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now()},
})

<<<<<<< HEAD
=======
userSchema.pre('save', async function(next) {
	const unencryptedPassword = this.password
	const saltRound = 10
	const encryptedPassword = await bcrypt.hash(unencryptedPassword, saltRound)
	this.password = encryptedPassword
	next()
})

>>>>>>> dad2532 (modified idea schema)
const User = mongoose.model('User', userSchema)

module.exports = User