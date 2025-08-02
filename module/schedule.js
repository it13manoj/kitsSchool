const db1 = require('../connection/createconnection')

const tableschedule=`CREATE TABLE IF NOT EXISTS schedule(
id INT AUTO_INCREMENT PRIMARY KEY,
notification VARCHAR(255) NULL,
studentid INT NULL,
classesid INT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (studentid) REFERENCES users(id),
FOREIGN KEY (classesid) REFERENCES classes(id)
)`;

db1.query(tableschedule,(err,result)=>{
    if(err){
        console.error('Error creating schedule table',err)
        process.exit(0)
    }else{
        console.log('Schedule table created!')
    }
})

module.exports=db1