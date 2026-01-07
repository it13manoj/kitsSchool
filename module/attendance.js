const db1 =require ('../connection/createconnection')

const createattendance = `CREATE TABLE IF NOT EXISTS attendance(
id INT AUTO_INCREMENT PRIMARY KEY,
att_date VARCHAR(255) NOT NULL,
userid INT NULL,
att_status enum("Present","Absent","On Leave") NOT NULL,
discription VARCHAR(255) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (userid) REFERENCES users(id)
)`;

db1.query(createattendance,(err,result)=>{
    if(err){
        console.error('Error creating attendance table',err)
        process.exit(0)
    }else{
        console.log('attendance table created!')
    }
})

module.exports=db1