const db = require('../module/home');
const imagedb = require('../module/image')


const posthome = (req, resp) => {
    const { heading, heading2, discription, learm_more } = req.body;
    
    const sql = 'INSERT INTO home (heading, heading2, discription, learm_more) VALUES (?, ?, ?, ?)';
    db.query(sql, [heading, heading2, discription, learm_more], (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error inserting data",
                error: err
            });
        }
        req.files.map(row =>{
            const SQL1='INSERT INTO image (image, homeid) values (?,?)'
            imagedb.query(SQL1,[row.filename, result.insertId],(err,result)=>{
                console.log(err)
            })
        })

        resp.status(200).send('Record Inserted Successfully!');
    });
};

const gethome = (req, resp) => {
    const { id } = req.params
    const sql = 'SELECT * FROM home';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error fetching data",
                error: err
            });
        }
        let count = 0;
        result.forEach((home, index) => {
            imagedb.query(`SELECT * FROM image where homeid=?`, [home.id], (err, images) => {
                result[index].images = images
                count++;
                if (count === result.length) {
                    resp.status(200).json({ data: result })

                }
            })
        })
    });
};

module.exports = {
    posthome,
    gethome
};
