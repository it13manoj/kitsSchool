const db = require('../module/contacts')

 const postcontacts=(req,resp)=>{
    const {title,heading1,heading2,discription,address,email,phone,opening_hour} = req.body
    const sql ='INSERT INTO contacts (title,heading1,heading2,discription,address,email,phone,opening_hour) values (?,?,?,?,?,?,?,?)'
    db.query(sql,[title,heading1,heading2,discription,address,email,phone,opening_hour],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:err
        })
        resp.status(200).send('Record Insert Successfully!')
    })
 }

 const getcontacts =(req,resp)=>{
    const mysql='Select * from contacts'
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        resp.status(200).send({
            message:"Inserted Record!",
            data:result
        })
    })
}

module.exports={
    postcontacts,
    getcontacts
}