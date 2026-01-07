const db = require('../module/comments')
const imageDB =require('../module/image')

 const postcomments=(req,resp)=>{
    const {name,degination,discription} = req.body
    const sql ='INSERT INTO comments (name,degination,discription) values (?,?,?)'
    db.query(sql,[name,degination,discription],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        req.files.map(row=>{
            const SQL1='INSERT INTO image (image, commid) values (?,?)'
            imageDB.query(SQL1,[row.filename, result.insertId],(err,result)=>{
                
            })
        })
        resp.status(200).send('Record Insert Successfully!')
    })
 }

 const getcomments =(req,resp)=>{
    const mysql='Select * from comments where status ="1"'
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        let count=0;
        result.forEach((Comments, index)=>{
            imageDB.query(`Select * from image where commid=?`,[Comments.id],(err,images)=>{
                result[index].images=images
                count++
                if(count===result.length){
                    resp.status(200).json({data:result})
                }
            })
        })
    })
}

module.exports={
    postcomments,
    getcomments
}