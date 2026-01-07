const db1 = require('../connection/createconnection')

const createhome=`CREATE TABLE IF NOT EXISTS home(
id INT AUTO_INCREMENT PRIMARY KEY,
heading VARCHAR(100) NOT NULL,
heading2 VARCHAR(100) NOT NULL,
discription VARCHAR(255) NOT NULL,
image VARCHAR(255) NULL,
learm_more VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createhome,(err,result)=>{
    if(err){
        console.error('Error creating home table',err)
        process.exit(0)
    }else{
        console.log('Home table created!')
    }
})

module.exports=db1