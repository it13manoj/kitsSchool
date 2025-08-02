const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { posthome, gethome } = require('../controller/home');

router.post('/home', upload.array('images'), posthome);
router.get('/home', gethome);

module.exports = router;
