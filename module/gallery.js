const db1 = require('../connection/createconnection')

const creategallery= `CREATE TABLE IF NOT EXISTS gallery(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
heading1 VARCHAR(100) NOT NULL,
heading2 VARCHAR(100) NOT NULL,
image VARCHAR(255) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(creategallery,(err,result)=>{
    if(err){
        console.error('Error creating gallery table',err)
        process.exit(0)
    }else{
        console.log('gallery table created!')
    }
})

module.exports=db1