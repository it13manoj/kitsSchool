const db1 = require('../connection/createconnection');

const createblogde = `CREATE TABLE IF NOT EXISTS blogdetails (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  heading1 VARCHAR(100) NOT NULL,
  heading2 VARCHAR(100) NULL,
  discription LONGTEXT NULL,
  image VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createblogde, (err, result) => {
    if (err) {
        console.error('Error creating blogdetails table', err);
        process.exit(1);
    }
    console.log('blogdetails table created!');
});

module.exports = db1;
