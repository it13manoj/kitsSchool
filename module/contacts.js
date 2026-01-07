const db1 = require('../connection/createconnection');

const createcontacts = `CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  heading1 VARCHAR(100) NOT NULL,
  heading2 VARCHAR(100) NULL,
  discription LONGTEXT NULL,
  address VARCHAR(255) NULL,
  email VARCHAR(100) NULL,
  phone VARCHAR(15) NULL,
  opening_hour VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createcontacts, (err, result) => {
    if (err) {
        console.error('Error creating contacts table', err);
        process.exit(1);
    }
    console.log('contacts table created!');
});

module.exports = db1;
