const db1 = require('../connection/createconnection')

const createstdclass=`CREATE TABLE IF NOT EXISTS studentclass(
id INT AUTO_INCREMENT PRIMARY KEY,
studentid INT NULL,
teacherid INT NULL,
classesid INT NULL,
subjectid INT NULL,
timeid INT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (studentid) REFERENCES users(id),
FOREIGN KEY (teacherid) REFERENCES users(id),
FOREIGN KEY (classesid) REFERENCES classes(id),
FOREIGN KEY (subjectid) REFERENCES subject(id),
FOREIGN KEY (timeid) REFERENCES time(id)
)`;

db1.query(createstdclass,(err,result)=>{
    if(err){
        console.error('Error creating studentclass table',err)
        process.exit(0)
    }else{
        console.log('Student Class table created!')
    }
})

module.exports=db1