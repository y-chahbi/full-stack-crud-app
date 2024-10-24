

const connection = async () => {
  const mysql = require('mysql2/promise');
  const pool = mysql.createPool({
    host: 'mariadb',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_USERS,
  });

  return await pool.getConnection();
};

export default connection; 