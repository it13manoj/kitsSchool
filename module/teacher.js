const db1 = require('../connection/createconnection')

const createteacher=`CREATE TABLE IF NOT EXISTS teacher(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
heading1 VARCHAR(100) NOT NULL,
heading2 VARCHAR(100) NOT NULL,
image VARCHAR(255) NULL,
teacher_name VARCHAR(100) NULL,
designation VARCHAR(100) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createteacher,(err,result)=>{
    if(err){
        console.error('Error creating teacher table',err)
        process.exit(0)
    }else{
        console.log('Teacher table created!')
    }
})

module.exports=db1