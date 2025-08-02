const express = require('express')
const Route = express.Router()
const upload = require('../middleware/upload');
const {postblog,getblog} = require('../controller/blog')

Route.post('/blog',upload.array('images'),postblog)
Route.get('/blog',getblog)


module.exports=Route