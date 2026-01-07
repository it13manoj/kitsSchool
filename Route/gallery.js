const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { postgallery, getgallery } = require('../controller/gallery');

router.post('/gallery', upload.array('images'), postgallery);
router.get('/gallery', getgallery);

module.exports = router;