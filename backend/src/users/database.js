require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DATABASE_DEFAULT_USER,
    password: process.env.DATABASE_DEFAULT_PASSWORD,
    host: process.env.DATABASE_DEFAULT_HOST,
    port: process.env.DATABASE_DEFAULT_PORT,
    database: process.env.DATABASE_DEFAULT_NAME
});

module.exports = pool;