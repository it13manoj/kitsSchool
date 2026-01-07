const express = require('express')
const Route = express.Router()
const upload = require('../middleware/upload')
const {postusers,getusers,login, getProfile, teachers, getStudentProfile} = require('../controller/Users')
const auth = require('../middleware/Auth')




Route.post('/users',upload.array('images'),postusers)
Route.get('/users',getusers)

Route.post('/users/login',login)
Route.get("/users/profile" , auth, getProfile)
Route.get("/users/teacher",auth, teachers)
Route.get("/users/student/:id",auth, getStudentProfile)

module.exports=Route