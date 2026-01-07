const express =require('express')
const Route = express.Router()
const usercontacts = require('../controller/contacts')

Route.post('/contacts',usercontacts.postcontacts)
Route.get('/contacts',usercontacts.getcontacts)


module.exports=Route