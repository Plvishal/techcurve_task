import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

con.connect((error) => {
  if (error) {
    console.log(error.message);
  }
  console.log('Database connect successfully done');
});
export default con.promise();
