const express =require('express')
const Route =express.Router()
const createcls=require('../controller/classes')
const auth = require('../middleware/Auth')

Route.post('/classes',createcls.postclasses)
Route.get('/classes',auth,createcls.getclasses)

module.exports=Route