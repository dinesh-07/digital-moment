const express = require('express');
const login = require('./login');
const signup = require('./signup');
const router = express.Router();

router.use('/login/', login);
router.use('/signup/', signup);

module.exports = router;
