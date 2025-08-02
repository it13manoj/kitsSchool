const db = require('../module/teacher')
const imageDb = require('../module/image')


const postteacher = (req,resp)=>{
    const {title,heading1,heading2,teacher_name,designation} = req.body
    const sql='insert into teacher (title,heading1,heading2,teacher_name,designation) values (?,?,?,?,?)'
    db.query(sql,[title,heading1,heading2,teacher_name,designation],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })

        req.files.map(row=>{
            const SQL1 ='INSERT INTO image (image, teacherid) values (?,?)'
            imageDb.query(SQL1,[row.filename, result.insertId],(err,result)=>{

            })
        })
        resp.status(200).send('Record Insert Successfully!')
    })
}

const getteacher =(req,resp)=>{
    
    const mysql='Select * from teacher'
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        let count =0;
        result.forEach((teacher, index)=>{
            imageDb.query(`SELECT * FROM image where teacherid=?`,[teacher.id],(err,images)=>{
               result[index].images=images
               count++;
               if(count===result.length){
                resp.status(200).json({data:result})
               } 
            })
        })
    })
}

module.exports={
    postteacher,
    getteacher
}