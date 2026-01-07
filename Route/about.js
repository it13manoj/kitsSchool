const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { postabout, getabout } = require('../controller/about');

// Use upload.fields() to accept multiple named file fields
router.post('/about',  upload.array('images'), postabout);

router.get('/about', getabout);

module.exports = router;
