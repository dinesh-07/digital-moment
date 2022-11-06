const express = require('express');
const router = express.Router();

const { getUserByEmail } = require('../../../controllers/UserController');

router.post('', async (req, res, next) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (user && user.password === password) {
        res.send({ ...user.toJSON(), password: undefined, createdAt: undefined });
    } else {
        next(new Error("Invalid email or password"));
    }
});

module.exports = router;
