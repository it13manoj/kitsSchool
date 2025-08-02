const express =require('express')
const Route =express.Router()
const createsub=require('../controller/subject')
const auth = require('../middleware/Auth')

Route.post('/subject',createsub.postsub)
Route.get('/subject',auth,createsub.getsub)

module.exports=Route