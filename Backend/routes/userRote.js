const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controller/userController');

router.post('/users', createUser);

router.get('/users', getAllUsers);

module.exports = router;