const db =require('../module/blogdetails')
const imageDB = require('../module/image')

const postblogdetails=(req,resp)=>{
    const {title,heading1,heading2,discription} =req.body
    const sql ='INSERT INTO blogdetails (title,heading1,heading2,discription) values (?,?,?,?)'
    db.query(sql,[title,heading1,heading2,discription],(err,result)=>{
        if(err) resp.status(500).send({
            resp:"500",
            message:err
        })
        req.files.map(row=>{
            const SQL1 ='INSERT INTO image(image, blogdeid) values (?,?)'
            imageDB.query(SQL1,[row.filename, result.insertId],(err,result)=>{
                
            })
        })
        resp.status(200).send('Record Insert successfully!')
    })
}
const getblogdetails = (req, resp) => {
    const sql = 'SELECT * FROM blogdetails';
    db.query(sql,(err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error fetching data",
                error: err
            });
        }
        let count =0;
        result.forEach((blogdetails, index)=>{
            imageDB.query(`SELECT * FROM image where blogdeid=?`,[blogdetails.id],(err,images)=>{
                result[index].images=images
                count++;
                if(count===result.length){
                    resp.status(200).json({data:result})
                }
            })
        })
    });
};
module.exports={
    postblogdetails,
    getblogdetails
}