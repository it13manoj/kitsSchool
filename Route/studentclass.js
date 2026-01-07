const express = require('express')
const Route = express.Router()
const stdcls = require('../controller/studentclass')
const auth = require('../middleware/Auth')

Route.post('/studentclass',auth,stdcls.poststdcls)
Route.get('/studentclass',auth,stdcls.getstdcls)
Route.get('/teacher/assign_class',auth,stdcls.getTeacherAssignClass)
Route.get('/teacher/assign_class/:classId',auth,stdcls.getTeachClassDetails)
Route.get('/student/exam',auth,stdcls.getStudentExamDetails)
Route.get('/teacher/result',auth,stdcls.getTeacherResult)
Route.get('/student_class/:classId',auth,stdcls.studentInClass)
Route.post('/studentattenance',auth,stdcls.postattend)
Route.get('/studentattendace/:id',auth,stdcls.studentAttend)

module.exports=Route