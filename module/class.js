const db1 = require('../connection/createconnection')

const createClass = `CREATE TABLE IF NOT EXISTS class(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
heading1 VARCHAR(100) NOT NULL,
heading2 VARCHAR(100) NOT NULL,
image VARCHAR(100) NULL,
status ENUM("0","1") DEFAULT 1,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createClass,(err,result)=>{
    if(err){
        console.error('Error creating class table',err)
        process.exit(0)
    }
    console.log('Class table created!')
})

module.exports=db1