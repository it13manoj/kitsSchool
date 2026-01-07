const db =require('../module/schedule')

const postschedule=(req,resp)=>{
    const {notification,studentid,classesid} = req.body
    const sql = 'insert into schedule (notification,studentid,classesid) values (?,?,?)'
    db.query(sql,[notification,studentid,classesid],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        resp.status(200).send('Record insert successfully!')
    })
}

const getschedule=(req,resp)=>{
    const {id} = req.user.id
    const mysql ='select s.notification, u.name, c.classes from schedule s inner join users u on s.studentid=u.id inner join classes c on s.classesid=c.id'
    db.query(mysql,[id],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        resp.status(200).send({
            message:"inserted Record!",
            data:result
        })
    })
}

module.exports={
    postschedule,
    getschedule
}