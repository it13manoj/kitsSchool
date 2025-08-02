 

const { encrypted, decrypted } = require('../helper/bcrypt')
const { token } = require('../helper/jwt')
const db = require('../module/Users')
const imageDb = require('../module/image')

const postusers = async (req, resp) => {

    let { name, degination, discription, type, gender, dob, address, contact, email, password, social_link } = req.body
    password = await encrypted(password);

    const sql = 'INSERT INTO users (name,degination,discription,type,gender,dob,address,contact,email,password,social_link) values (?,?,?,?,?,?,?,?,?,?,?)'
    db.query(sql, [name, degination, discription, type, gender, dob, address, contact, email, password, social_link], (err, result) => {
        if (err) {resp.status(500).send({
            resp: "500",
            message: err
        })}
        req.files.map(row => {
            const SQL1 = 'insert into image(image, usersid) values (?,?)'
            imageDb.query(SQL1, [row.filename, result.insertId], (err, result) => {
                console.log(err)
            })
        })
        resp.status(200).send('Record Insert Successfully!')
    })
}

const getusers = (req, resp) => {
    const { id } = req.params
    const mysql = 'Select * from users'
    db.query(mysql, [id], (err, result) => {
        if (err) resp.status(500).send({
            resp: "500",
            message: "err"
        })
        let count = 0;
        result.forEach((users, index) => {
            imageDb.query(`SELECT * FROM image where usersid=?`, [users.id], (err, images) => {
                result[index].images = images
                count++;
                if (count === result.length) {
                    resp.status(200).json({ data: result })
                }
            })
        })
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const mysql = 'SELECT * FROM users WHERE email = ?';

    db.query(mysql, [email], async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Database Error", error: err });

        if (!result || result.length === 0) {
            return res.status(401).json({ success: false, message: "Not Authorized" });
        }
       
        const isMatch = await decrypted(password, result[0].password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Login Failed" });
        }

        const data = {
            email: result[0].email,
            id:result[0].id,
            username: result[0].name,
        };

        const tokens = token(data);
        delete result[0].password;

        return res.status(200).json({ results: result[0], token: tokens });
    });
};


const getProfile = (req,res)=>{
const { id } = req.user;
    const mysql = 'SELECT * FROM users u LEFT JOIN image i ON i.usersid = u.id WHERE u.id = ?;';
     db.query(mysql, [id],  (err, result) => {
         if (err) return res.status(500).json({ success: false, message: "Database Error", error: err });

        if (!result || result.length === 0) {
            return res.status(401).json({ success: false, message: "Not Authorized" });
        }
       
        delete result[0].password;
        return res.status(200).json({ results: result[0]});

     })

}


const teachers =(req,res) =>{
        const mysql = 'SELECT * FROM users u WHERE u.type=?;';
     db.query(mysql, ["Teacher"],  (err, result) => {
         if (err) return res.status(500).json({ success: false, message: "Database Error", error: err });

        if (!result || result.length === 0) {
            return res.status(401).json({ success: false, message: "Not Authorized" });
        }
       
        result.filter(row=>delete row.password)
        delete result[0].password;
        return res.status(200).json({ results: result});

     })
}

const getStudentProfile = (req,res)=>{
const { id } = req.params;
    const mysql = 'SELECT * FROM users u LEFT JOIN image i ON i.usersid = u.id WHERE u.id = ?;';
     db.query(mysql, [id],  (err, result) => {
         if (err) return res.status(500).json({ success: false, message: "Database Error", error: err });

        if (!result || result.length === 0) {
            return res.status(401).json({ success: false, message: "Not Authorized" });
        }
       
        delete result[0].password;
        return res.status(200).json({ results: result[0]});

     })

}

module.exports = {
    postusers,
    getusers,
    login,
    getProfile,
    teachers,
    getStudentProfile
}