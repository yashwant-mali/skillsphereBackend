const { getAllUsers, createUser } = require('../controllers/registerController');
const express = require('express');
const router = express.Router();


router.get('/', getAllUsers);
router.post('/', createUser); // Add this

module.exports = router;


