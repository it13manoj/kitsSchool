const db1 = require('../connection/createconnection')

const createblog= `CREATE TABLE IF NOT EXISTS blog(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
heading1 VARCHAR(100) NULL,
heading2 VARCHAR(255) NULL,
image VARCHAR(255) NULL,
heading3 VARCHAR(255) NULL,
discription LONGTEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createblog,(err,result)=>{
    if(err){
        console.error('Error creating blog table',err)
        process.exit(0)
    }
    console.log('blog table created!')
})

module.exports = db1;