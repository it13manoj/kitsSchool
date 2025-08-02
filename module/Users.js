const db1 = require('../connection/createconnection')

const createusers=`CREATE TABLE IF NOT EXISTS users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
degination VARCHAR(100) NOT NULL,
discription VARCHAR(255) NOT NULL,
type enum("Teacher","Student","Director","Principle", "HOD", "Pion","Gard","Driver","Parent")  NULL,
gender VARCHAR(100)  NULL,
dob VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
contact VARCHAR(100) NOT NULL,
email VARCHAR(255) NULL,
password VARCHAR(255) NULL,
social_link VARCHAR(255) NULL,
image VARCHAR(255) NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createusers,(err,result)=>{
    if(err){
        console.error('Error creating users table',err)
        process.exit(0)
    }else{
        console.log('users table created!')
    }
})

module.exports=db1

// CREATE A TABFLE OF COMMENT 