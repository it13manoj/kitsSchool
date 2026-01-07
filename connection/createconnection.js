const db = require('mysql2')
const dbconfig = require('config')
const dbconn = dbconfig.get('CreateDatabase')

const conn= db.createConnection({
    "host":dbconn.host,
    "user":dbconn.user,
    "password":dbconn.password,
    "database":dbconn.database
});

conn.connect((err)=>{
    if(err){
        console.error('Error creating connection',err)
        process.exit(0)
    }else{
        console.log('created connection')
    }
})

module.exports=conn