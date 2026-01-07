const db1 =require('../connection/createconnection')

const createtime=`CREATE TABLE IF NOT EXISTS time(
id INT AUTO_INCREMENT PRIMARY KEY,
time VARCHAR(100) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

db1.query(createtime,(err,result)=>{
    if(err){
        console.error('Error creating time table',err)
        process.exit(0)
    }else{
        console.log('TIME table created!')
    }
})

module.exports=db1