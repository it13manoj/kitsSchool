const db = require('../module/exam')

const postexam=(req,resp)=>{
    const {subjectid,timeid,teacherid,classesid} = req.body
    const sql ='INSERT INTO exam (subjectid,timeid,teacherid,classesid) VALUES (?,?,?,?)';
    db.query(sql,[subjectid,timeid,teacherid,classesid],(err,result)=> {
        if(err) { resp.status(500).send({
            status:"500",
            message:err
        }) }
        resp.status(200).send('Record Inserted Successfully!')
    })
}

const getteachexam=(req,resp)=>{
    const id = req?.user?.id
    const mysql='select s.sub_name as subjectname, t.time, u.name, c.classes from exam e inner join subject s on e.subjectid=s.id inner join time t on e.timeid=t.id inner join users u on e.teacherid=u.id inner join classes c on e.classesid=c.id where e.teacherid=?'
    db.query(mysql,[id],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:err
        })
        resp.status(200).send({
            message:"Inserted Record!",
            data:result
        })
    })
}
module.exports={
    postexam,
    getteachexam
}