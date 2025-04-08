const express = require('express');
const router = express.Router();
const { createExer, getAllExers, getExerByName } = require('../controller/exerController'); 

router.post('/exers', createExer);

router.get('/exers', getAllExers);

router.get('/exers/:nome', getExerByName);


module.exports = router;