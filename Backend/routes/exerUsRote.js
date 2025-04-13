const express = require('express');
const router = express.Router();
const { createUserExerc, getAll } = require('../controller/exUsController');

router.post('/ExerUser', createUserExerc);
router.get('/ExerUser', getAll);


module.exports = router;