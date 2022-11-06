
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserController');

router.get('/:id', async (req, res, next) => {
    const userId = req.params.id
    const user = await userController.getUserById(userId)

    if (user)
        res.send(user);
    else
        next(new Error("User does not exist"));
});

module.exports = router;