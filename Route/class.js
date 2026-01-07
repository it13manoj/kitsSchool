const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { postclass, getclass } = require('../controller/class');

// Accept 3 files: image1, image2, image3
router.post('/class', upload.array('images'), postclass);

router.get('/class', getclass);

module.exports = router;
