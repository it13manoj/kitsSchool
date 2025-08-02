const db1 = require('../connection/createconnection')

const createimage=`CREATE TABLE IF NOT EXISTS image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    homeid INT NULL,
    aboutid INT NULL,
    classid INT NULL,
    teacherid INT NULL,
    galleryid INT NULL,
    blogid INT NULL,
    kidsid INT NULL,
    blogdeid INT NULL,
    facilitiesid INT NULL,
    commid INT NULL,
    usersid INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (homeid) REFERENCES home(id),
    FOREIGN KEY (aboutid) REFERENCES about(id),
    FOREIGN KEY (classid) REFERENCES class(id),
    FOREIGN KEY (teacherid) REFERENCES teacher(id),
    FOREIGN KEY (galleryid) REFERENCES gallery(id),
    FOREIGN KEY (blogid) REFERENCES blog(id),
    FOREIGN KEY (kidsid) REFERENCES kidsclasses(id),
    FOREIGN KEY (blogdeid) REFERENCES blogdetails(id),
    FOREIGN KEY (facilitiesid) REFERENCES facilities(id),
    FOREIGN KEY (commid) REFERENCES comments(id),
    FOREIGN KEY (usersid) REFERENCES users(id)
);
`;

db1.query(createimage,(err,result)=>{
    if(err){
        console.error('Error creating image table',err)
        process.exit(0)
    }else{
        console.log('image table created!')
    }
})

 module.exports=db1