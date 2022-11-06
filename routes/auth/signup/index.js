const express = require('express');
const { saveUser, getUserByEmail } = require('../../../controllers/UserController');
const router = express.Router();

router.post('', async (req, res, next) => {
    const { email, name, password, isAdmin } = req.body;
    const prevUser = await getUserByEmail(email);

    if (prevUser) {
        next(new Error("User already exists"));
    } else {
        try {
            const user = await saveUser(name, email, password, isAdmin);
            res.send(user);
        } catch (error) {
            next(error);
        }
    }
});

module.exports = router;
