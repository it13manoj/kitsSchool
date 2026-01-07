const db = require('../module/facilities')
const imageDB =require('../module/image')

 const postfacilities=(req,resp)=>{
    const {heading,discription} = req.body
    const sql ='INSERT INTO facilities (heading,discription) values (?,?)'
    db.query(sql,[heading,discription],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:err
        })
        req.files.map(row=>{
            const SQL1='INSERT INTO image (image, facilitiesid) values (?,?)'
            imageDB.query(SQL1,[row.filename, result.insertId],(err,result)=>{
                
            })
        })

        resp.status(200).send('Record Insert Successfully!')
    })
 }

 const getfacilities =(req,resp)=>{
    
    const mysql='Select * from facilities'
    db.query(mysql,(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:"err"
        })
        let count=0;
        result.forEach((facilities, index)=>{
            imageDB.query(`SELECT * FROM image where facilitiesid=?`,[facilities.id],(err,images)=>{
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
    postfacilities,
    getfacilities
}