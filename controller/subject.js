const db = require('../module/subject')

const postsub=(req,resp)=>{
    const {sub_name} = req.body
    const sql = 'insert into subject (sub_name) values (?)'
    db.query(sql,[sub_name],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send('Record insert successfully!')
    })
}

const getsub=(req,resp)=>{
    const mysql ='select * from subject'
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:err
        })
        resp.status(200).send({
            message:"inserted Record!",
            data:result
        })
    })
}

module.exports={
    postsub,
    getsub
}