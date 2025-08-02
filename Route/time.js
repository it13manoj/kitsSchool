const express =require('express')
const Route =express.Router()
const createtime=require('../controller/time')
const auth = require('../middleware/Auth')

Route.post('/time',createtime.posttime)
Route.get('/time',auth,createtime.gettime)

module.exports=Route