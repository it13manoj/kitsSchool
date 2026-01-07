const express = require('express')
const Route = express.Router()
const createx = require('../controller/exam')
const auth = require('../middleware/Auth')

Route.post('/exam',auth,createx.postexam)
Route.get('/exam/:teacherid',auth,createx.getteachexam)


module.exports=Route