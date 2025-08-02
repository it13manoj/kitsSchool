const db = require('../module/gallery')
const imageDb = require('../module/image')

const postgallery=(req,resp)=>{
    const {title,heading1,heading2} = req.body
    
    const sql ='insert into gallery (title,heading1,heading2) values (?,?,?)'
    db.query(sql,[title,heading1,heading2],(err,result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error inserting data",
                error: err
            });
        }
        req.files.map(row=>{
            const SQL1='INSERT INTO image (image, galleryid) values (?,?)'
            imageDb.query(SQL1,[row.filename, result.insertId],(err,result)=>{

            })
        })
        resp.status(200).send('Record Inserted Successfully!');
    })
}

const getgallery = (req, resp) => {
    const {id} = req.params
    const sql = 'SELECT * FROM gallery';
    db.query(sql,[id],(err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error fetching data",
                error: err
            });
        }
        let count =0;
        result.forEach((gallery, index)=>{
            imageDb.query(`SELECT * FROM image where galleryid =?`,[gallery.id],(err,images)=>{
                result[index].images=images
                count++;
                if(count===result.length){
                    resp.status(200).json({data:result})
                }
            })
        })
    });
};

module.exports = {
    postgallery,
    getgallery
};