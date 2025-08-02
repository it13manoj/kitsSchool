const db = require('../module/kidsclasses')
const imageDb = require('../module/image')

const postkidsclasses=(req,resp)=>{
    const {heading,discription,age_of_kids,total_seat,class_time,tution_fee} = req.body
    
    const sql ='insert into kidsclasses (heading,discription,age_of_kids,total_seat,class_time,tution_fee) values (?,?,?,?,?,?)'
    db.query(sql,[heading,discription,age_of_kids,total_seat,class_time,tution_fee],(err,result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error inserting data",
                error: err
            });
        }
        req.files.map(row=>{
            const SQL1='INSERT INTO image (image, kidsid) values (?,?)'
            imageDb.query(SQL1,[row.filename, result.insertId],(err,result)=>{

            })
        })
        resp.status(200).send('Record Inserted Successfully!');
    })
}

const getkidsclasses = (req, resp) => {
    const {id} = req.params
    const sql = 'SELECT * FROM kidsclasses where status= "1"';
    db.query(sql,[id],(err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error fetching data",
                error: err
            });
        }
        let count=0;
        result.forEach((kidsclasses, index)=>{
            imageDb.query(`SELECT * FROM image where kidsid=?`,[kidsclasses.id],(err,images)=>{
                result[index].images=images
                count++;
                if(count===result.length)
                    resp.status(200).json({data:result})
            })
        })
    });
};

module.exports = {
    postkidsclasses,
    getkidsclasses
};