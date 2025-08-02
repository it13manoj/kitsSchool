const db1 =require('../connection/createconnection')

const createclasses=`CREATE TABLE IF NOT EXISTS classes(
id INT AUTO_INCREMENT PRIMARY KEY,
classes VARCHAR(100) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

db1.query(createclasses,(err,result)=>{
    if(err){
        console.error('Error creating classes table',err)
        process.exit(0)
    }else{
        console.log('classes table created!')
    }
})

module.exports=db1