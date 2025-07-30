const { getAllTeachers, createTeacher } = require('../controllers/teachersController');

const express = require('express');
const router = express.Router();

router.get('/', getAllTeachers);
router.post('/', createTeacher);



module.exports = router;