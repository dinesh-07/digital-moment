const User = require('../models/User')

async function saveUser(name, areaofintrest, email, password) {
    const user = User({name, areaofintrest, email, password})
    await user.save()
}

async function getAllUsers() {
    return await User.find({})
}

async function getUserById(id) {
    return await User.find({_id: id})
}

// further customise as per the needs.
module.exports = {saveUser, getAllUsers, getUserById}