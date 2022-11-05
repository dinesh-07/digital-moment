const User = require('../models/User')

async function saveUser(name, age) {
    const student = Student({name: name, age: age})
    await student.save()
}

async function fetchUser() {
    return await Student.find({})
}

// further customise as per the needs.
module.exports = {saveStudents, fetchStudents}