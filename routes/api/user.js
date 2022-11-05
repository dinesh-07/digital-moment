
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserController');


router.post('/register-user', async (req, res) => {
    const {name, areaofintrest, email, password}  = req.body
    try {
        const user = await userController.saveUser(name, areaofintrest, email, password)
        res.send({message: "User has been registered to the system", user})
    } catch(error) {
        res.send({
            message: "Error saving the user to the system", 
            error: error
        })
    }
})

// inconsistent error handling
router.get('/get-user/:id', async (req, res) => {
    const userid = req.params.id
    const user = await userController.getUserById(userid)
    res.send(user)
})

router.get('/get-users', async (_request, res) => {
    try {
        const users = await userController
        .getAllUsers()
        res.send(users)
    } catch(error) {
        res.send({
            message: "Error fetching users from system", 
            error: error
        })
    }
} )

module.exports = router

