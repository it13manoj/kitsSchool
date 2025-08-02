const express = require('express')
const Route = express.Router()
const upload =require('../middleware/upload')
const {postcomments,getcomments} = require('../controller/comments')



Route.post('/comments',upload.array('images'),postcomments)
Route.get('/comments',getcomments)




module.exports=Route