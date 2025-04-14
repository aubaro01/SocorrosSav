const express = require('express');
const router = express.Router();
const { createUserExerc, getAll, getUserExerciseCount } = require('../controller/exUsController');

router.post('/ExerUser', createUserExerc);
router.get('/ExerUser', getAll);
router.get("/CountUser", getUserExerciseCount);


module.exports = router;