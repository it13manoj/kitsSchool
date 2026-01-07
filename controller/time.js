const db =require('../module/time')

const posttime=(req,resp)=>{
    const {time} = req.body
    const sql = 'insert into time (time) values (?)'
    db.query(sql,[time],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        resp.status(200).send('Record insert successfully!')
    })
}

const gettime=(req,resp)=>{
    const mysql ='select * from time'
    db.query(mysql,(err,result)=>{
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
    posttime,
    gettime
}