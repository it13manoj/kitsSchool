const db =require('../module/studentresult')

const postResult=(req,resp)=>{
    const {marks,classesid,studentid,subjectid} = req.body
    const sql = 'insert into studentresult (marks,classesid,studentid,subjectid) values (?,?,?,?)'
    db.query(sql,[marks,classesid,studentid,subjectid],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send('Record insert successfully!')
    })
}

const getResult=(req,resp)=>{
    const id = req?.user?.id
    const mysql ='select r.marks, c.classes, u.name, s.sub_name as subjectName from studentresult r inner join classes c on r.classesid=c.id inner join users u on r.studentid=u.id inner join subject s on r.subjectid=s.id where u.id=?'
    db.query(mysql,[id],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send({
            message:"inserted Record!",
            data:result
        })
    })
}

const getassignresult=(req,resp)=>{
    const {id} = req.params
    const mysql ='select r.marks, c.classes, u.name, s.sub_name as subjectName from studentresult r inner join classes c on r.classesid=c.id inner join users u on r.studentid=u.id inner join subject s on r.subjectid=s.id where r.studentid=?'
    db.query(mysql,[id],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send({
            message:"inserted Record!",
            data:result
        })
    })
}


const stResults = (req,resp)=>{
    const {id} = req.params
    const mysql =`SELECT r.marks, u.name AS studentName, s.sub_name as subjectName , CASE WHEN (r.marks) >= 30 THEN "PASS" ELSE "FAIL" END AS results FROM studentresult r INNER JOIN users u on u.id = r.studentid INNER JOIN subject s on s.id = r.subjectid where u.id = ?`
    db.query(mysql,[id],(err,result)=>{
        if(err){ resp.status(500).send({
            status:"500",
            message:"err"
        })}
        resp.status(200).send({
            message:"inserted Record!",
            data:result
        })
    })
}



module.exports={
    postResult,
    getResult,
    getassignresult,
    stResults
}