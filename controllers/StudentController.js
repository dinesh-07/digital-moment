const Student = require('../models/Students')

async function saveStudents(name, age) {
    const student = Student({name: name, age: age})
    await student.save()
}

async function fetchStudents() {
    // mongoQuery
    return await Student.find({})
}

// further customise as per the needs.
module.exports = {saveStudents, fetchStudents}