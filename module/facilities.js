const db1 = require('../connection/createconnection');

const createfacilitie = `CREATE TABLE IF NOT EXISTS facilities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  heading VARCHAR(255) NOT NULL,
  discription LONGTEXT NULL,
  image VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db1.query(createfacilitie, (err, result) => {
    if (err) {
        console.error('Error creating facilities table', err);
        process.exit(1);
    }
    console.log('facilities table created!');
});

module.exports = db1;
