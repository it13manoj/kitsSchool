const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { postkidsclasses, getkidsclasses } = require('../controller/kidsclasses');

router.post('/kidsclasses', upload.array('images'), postkidsclasses);
router.get('/kidsclasses', getkidsclasses);

module.exports = router;