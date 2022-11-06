const express = require('express');
const { saveUser, getUserByEmail } = require('../../../controllers/UserController');
const router = express.Router();

router.post('', async (req, res) => {
    const { email, name, password, isAdmin } = req.body;
    const prevUser = await getUserByEmail(email);

    if (prevUser) {
        res.send("User already exists");
    } else {
        try {
            const user = await saveUser(name, email, password, isAdmin);
            res.send(user);
        } catch (error) {
            res.send(error);
        }
    }
});

module.exports = router;
