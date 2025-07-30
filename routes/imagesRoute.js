const express = require('express');
const router = express.Router();
const { getAllImages, createSkill } = require('../controllers/imagesController');


router.get('/', getAllImages);
router.post('/', createSkill)

module.exports = router;