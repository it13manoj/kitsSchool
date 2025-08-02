const express = require('express')
const Route = express.Router()
const upload = require('../middleware/upload');
const {postteacher, getteacher} = require('../controller/teacher')

Route.post('/teacher',upload.array('images'),postteacher)
Route.get('/teacher', getteacher)


module.exports=Route