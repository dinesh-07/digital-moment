const User = require('../models/User')

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
async function saveUser(name, age) {
    const student = Student({name: name, age: age})
    await student.save()
=======
async function saveUser(name, areaofintrest, email, password) {
    const user = User({name, areaofintrest, email, password})
    await user.save()
>>>>>>> 8367092 (changes)
}

async function getAllUsers() {
    return await User.find({})
}

async function getUserById(id) {
    return await User.find({_id: id})
}

// further customise as per the needs.
<<<<<<< HEAD
module.exports = {saveStudents, fetchStudents}
>>>>>>> dad2532 (modified idea schema)
=======
module.exports = {saveUser, getAllUsers, getUserById}
>>>>>>> 8367092 (changes)
