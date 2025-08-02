const db1 = require('../connection/createconnection')

const createsubject=`CREATE TABLE IF NOT EXISTS subject(
id INT AUTO_INCREMENT PRIMARY KEY,
sub_name VARCHAR(255) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createsubject,(err,result)=>{
    if(err){
        console.err('Error creating subject table',err)
        process.exit(0)
    }else{
        console.log('Subject table created!')
    }
})

module.exports=db1