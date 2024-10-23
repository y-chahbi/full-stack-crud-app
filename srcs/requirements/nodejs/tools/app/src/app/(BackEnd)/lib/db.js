// lib/db.js
import mysql from 'mysql';


const connection = mysql.createConnection({
  host: 'mariadb',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_USERS,
});

connection.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      return;
    }
    console.log('Connected to the database.');
  });
  
export default connection;