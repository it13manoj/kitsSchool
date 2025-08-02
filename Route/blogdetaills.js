const express = require('express')
const Route = express.Router()
const upload =require('../middleware/upload')
const {postblogdetails,getblogdetails} = require('../controller/blogdetails')

Route.post('/blogdetails',upload.array('images'),postblogdetails)
Route.get('/blogdetails',getblogdetails)


module.exports=Route