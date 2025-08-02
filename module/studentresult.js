const db1 =require('../connection/createconnection')

const createresult=`CREATE TABLE IF NOT EXISTS studentresult(
id INT AUTO_INCREMENT PRIMARY KEY,
marks VARCHAR(100) NULL,
classesid INT NULL,
studentid INT NULL,
subjectid INT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (classesid) REFERENCES classes(id),
FOREIGN KEY (studentid) REFERENCES users(id),
FOREIGN KEY (subjectid) REFERENCES subject(id)
)`;

db1.query(createresult,(err,result)=>{
    if(err){
        console.error('Error creating Result table',err)
        process.exit(0)
    }else{
        console.log('Result table created!')
    }
})

module.exports=db1