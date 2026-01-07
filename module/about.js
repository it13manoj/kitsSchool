const db1 = require('../connection/createconnection')

const createabout=`CREATE TABLE IF NOT EXISTS about(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
heading1 VARCHAR(100) NOT NULL,
heading2 VARCHAR(100) NOT NULL,
discription VARCHAR(255) NOT NULL,
heading3 VARCHAR(100) NOT NULL,
learn_more VARCHAR(255),
image VARCHAR(255)  NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createabout,(err,result)=>{
    if(err){
        console.error('Error creating about table',err)
        process.exit(0)
    }else{
        console.log('About table created!')
    }
})

module.exports=db1