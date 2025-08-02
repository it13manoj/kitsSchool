const db1 = require('../connection/createconnection')

const createxam=`CREATE TABLE IF NOT EXISTS exam(
id INT AUTO_INCREMENT PRIMARY KEY,
subjectid INT NULL,
timeid INT NULL,
teacherid INT NULL,
classesid INT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (subjectid) REFERENCES subject(id),
FOREIGN KEY (timeid) REFERENCES time(id),
FOREIGN KEY (teacherid) REFERENCES users(id),
FOREIGN KEY (classesid) REFERENCES classes(id)
)`

db1.query(createxam,(err,result)=>{
    if(err){
        console.error('Error creating exam table',err)
        process.exit(0)
    }else{
        console.log('Exam table created!')
    }
})

module.exports=db1