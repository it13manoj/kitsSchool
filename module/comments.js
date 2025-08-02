const db1 = require('../connection/createconnection')

const createcomment=`CREATE TABLE IF NOT EXISTS comments(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
degination VARCHAR(100) NULL,
discription LONGTEXT,
image VARCHAR(255) NULL,
status ENUM("0","1") DEFAULT 1,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createcomment,(err,result)=>{
    if(err){
        console.error('Error creating comments table',err)
        process.exit(0)
    }
    console.log('Comments table created!')
})

module.exports=db1