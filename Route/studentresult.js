const express =require('express')
const Route =express.Router()
const createResult=require('../controller/studentresult')
const auth = require('../middleware/Auth')

Route.post('/result',createResult.postResult)
Route.get('/result',auth,createResult.getResult)
Route.get('/result/assign_result/:id',auth,createResult.getassignresult)
Route.get('/student/result/:id',auth,createResult.stResults)

module.exports=Route