const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
   user: process.env.DB_USER,
   host: process.env.DB_HOST,
   database: process.env.DB_NAME,
   password: process.env.DB_PASSWORD,
   port: process.env.DB_PORT,
   ssl: true
}); 

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "sampledb",
//     password: "12345678",
//     port: 5432,
//     // ssl: {
//     //     rejectUnauthorized: false // disable ssl
//     // }
// });

module.exports = pool;