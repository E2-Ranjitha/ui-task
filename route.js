const express = require('express');

const router = express.Router();

const controller = require('../controller/student');

router.post('/createStudent',controller.createStudent);
router.get('/getStudents',controller.getStudents);
router.post('/category',controller.category);

module.exports = router;