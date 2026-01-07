const db1 = require('../connection/createconnection')

const createclasses=`CREATE TABLE IF NOT EXISTS kidsclasses(
id INT AUTO_INCREMENT PRIMARY KEY,
heading VARCHAR(100) NOT NULL,
discription LONGTEXT NULL,
image VARCHAR(255)  NULL,
age_of_kids VARCHAR(100) NULL,
total_seat VARCHAR(100) NULL,
class_time VARCHAR(100) NULL,
tution_fee VARCHAR(100) NULL,
status ENUM("0","1") DEFAULT 1,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createclasses,(err,result)=>{
    if(err){
        console.error('Error creating kidsclasses table',err)
        process.exit(0)
    }else{
        console.log('kidsclasses table created!')
    }
})

module.exports=db1