const db =require('../module/classes')

const postclasses=(req,resp)=>{
    const {classes} = req.body
    const sql = 'insert into classes (classes) values (?)'
    db.query(sql,[classes],(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send('Record insert successfully!')
    })
}

const getclasses=(req,resp)=>{
    const mysql ='select * from classes '
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            status:"500",
            message:"err"
        })
        resp.status(200).send({
            message:"inserted Record!",
            result:result
        })
    })
}

module.exports={
    postclasses,
    getclasses
}