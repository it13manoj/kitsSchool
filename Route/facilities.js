const express = require('express')
const Route = express.Router()
const upload =require('../middleware/upload')
const {postfacilities,getfacilities} = require('../controller/facilities')



Route.post('/facilities',upload.array('images'),postfacilities)
Route.get('/facilities',getfacilities)




module.exports=Route