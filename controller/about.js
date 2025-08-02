const db = require('../module/about');
const imageDb = require('../module/image')

const postabout = (req, resp) => {
    const {
        title,
        heading1,
        heading2,
        discription,
        heading3,
        learn_more
    } = req.body;

    // Get filenames from uploaded files
    // const image1 = req.files['image1'] ? req.files['image1'][0].filename : null;
    // const image2 = req.files['image2'] ? req.files['image2'][0].filename : null;

    // if (!image1 || !image2) {
    //     return resp.status(400).send({
    //         resp: "400",
    //         message: "Both images are required"
    //     });
    // }

    const sql = 'INSERT INTO about (title, heading1, heading2, discription, heading3, learn_more) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [title, heading1, heading2, discription, heading3, learn_more];

    db.query(sql, values, (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Insert error",
                error: err
            });
        }


        req.files.map(row => {
            const SQL1 = 'INSERT INTO image(image, aboutid)  VALUES(?,?)';
            imageDb.query(SQL1, [row.filename, result.insertId], (err, result) => {

            })
        })

        resp.status(200).send("Record Inserted Successfully!");
    });
};

const getabout = (req, resp) => {
    
    const sql = 'SELECT * FROM about';
    db.query(sql, (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Fetch error",
                error: err
            });
        }
        let count =0;
        result.forEach((about, index)=>{
            imageDb.query(`select * from image where aboutid=?`,[about.id],(err,images)=>{
                result[index].images = images
                count++;
                if(count===result.length){
                    resp.status(200).json({data:result})
                }
            })
        })
    });
};

module.exports = {
    postabout,
    getabout
};
