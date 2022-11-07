const User = require('../models/User')

async function saveUser(name, email, password, isAdmin) {
    const user = User({name, email, password, isAdmin})
    await user.save()
    return user;
}

async function getAllUsers() {
    return await User.find({});
}

async function getUserById(id) {
    return await User.findOne({_id: id});
}

async function getUserByEmail(email) {
    return await User.findOne({ email });
}

// further customise as per the needs.
module.exports = { saveUser, getAllUsers, getUserById, getUserByEmail }