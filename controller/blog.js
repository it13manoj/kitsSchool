const db = require('../module/blog')
const imageDb = require('../module/image')

const postblog = (req, resp) => {
    const { title, heading1, heading2, heading3, discription } = req.body
    const sql = 'INSERT INTO blog (title,heading1,heading2,heading3,discription) values (?,?,?,?,?)'
    db.query(sql, [title, heading1, heading2, heading3, discription], (err, result) => {
        if (err) resp.status(500).send({
            resp: "500",
            message: err
        })
        req.files.map(row => {
            const SQL1 = 'INSERT INTO image(image, blogid) values (?,?)'
            imageDb.query(SQL1, [row.filename, result.insertId], (err, result) => {
                console.log(err);

            })
        })
        resp.status(200).send('Record Insert successfully!')
    })
}
const getblog = (req, resp) => {

    const sql = 'SELECT * FROM blog';
    db.query(sql, (err, result) => {
        if (err) {
            return resp.status(500).send({
                resp: "500",
                message: "Error fetching data",
                error: err
            });
        }
        let count = 0;
        result.forEach((blog, index) => {
            imageDb.query(`SELECT * FROM image WHERE blogid = ?`, [blog.id], (err, images) => {
                result[index].images = images;
                count++;

                // Final response after all queries complete
                if (count === result.length) {
                    resp.status(200).json({ data: result });
                }
            });
        });
    });
};
module.exports = {
    postblog,
    getblog
}