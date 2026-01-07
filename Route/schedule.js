const express =require('express')
const Route= express.Router()
const scheducreate = require('../controller/schedu')
const auth = require('../middleware/Auth')


Route.post('/schedule',scheducreate.postschedule)
Route.get('/schedule',auth,scheducreate.getschedule)

module.exports=Route