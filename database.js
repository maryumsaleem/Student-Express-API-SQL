// get the client
const mysql = require('mysql2');
require('dotenv').config();

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password:process.env.MYSQL_PASSWORD,
}).promise();

async function getStudents() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM students");
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
}

async function getStudent(id){
    try{
        const [rows]=await pool.query(`SELECT * FROM students WHERE idstudents = ?`,[id]);
        console.log(rows);
    }
    catch (err) {
        console.error(err);
      }
    
}

async function createStudent(idstudents,name,email,rollno) {
    try{
        const result=await pool.query(`INSERT INTO students (idstudents,name,email,rollno) VALUES (?,?,?,?)`,[idstudents,name,email,rollno]);
    }
    catch (err) {
        console.error(err);
      }
}
const result = createStudent('2','sam','sam@example.com','002');
console.log(result);
//getStudent(1);
//getStudents();
