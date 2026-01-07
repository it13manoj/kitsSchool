const db = require('../module/class');
const imageDb = require('../module/image')

const postclass = (req, resp) => {
   const {title, heading1, heading2} = req.body;

   const sql = `INSERT INTO class (title, heading1, heading2) VALUES (?, ?, ?)`;

    const values = [title, heading1, heading2]
   db.query(sql, values, (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Insert error",
                error: err
            });
        }
        const classId = result.insertId;
        const files = req.files || [];

        // Insert images into image table
        const imageInsertSQL = 'INSERT INTO image (image, classid) VALUES (?, ?)';

        files.forEach((file) => {
            imageDb.query(imageInsertSQL, [file.filename, classId], (imgErr) => {
                if (imgErr) {
                    console.error("Image insert error:", imgErr);
                    // Optional: you can return error here or collect errors and return at end
                }
            });
        });
        resp.status(200).send('Record inserted successfully!');
    });
};

const getclass = (req, resp) => {
  
    const sql = 'SELECT * FROM class where status = "1"';
    db.query(sql, (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Fetch error",
                error: err
            });
        }
        let count = 0;
        result.forEach((classes, index) => {
            imageDb.query(`SELECT * FROM image where classid=?`,[classes.id],(err, images)=>{
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
    postclass,
    getclass
};
