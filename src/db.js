const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'Redhat@123',
  database: 'Redhat'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database');
});

module.exports = connection;

