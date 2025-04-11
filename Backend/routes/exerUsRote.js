const express = require('express');
const router = express.Router();
const { createUserExerc } = require('../controller/exUsController');

router.post('/ExerUser', createUserExerc);

module.exports = router;