'use strict'

const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const peopleController = require('../../controllers/StudentController')

router.post('/save-user',  async (request, response) => {
    const {name, age}  = request.body
  
    try {
        await peopleController.saveStudents(name, age)
        response.send({message: "User has been saved to the system"})
    } catch(error) {
        response.send({
            message: "Error saving the user to the system", 
            error: error
        })
    }
})


module.exports = router

