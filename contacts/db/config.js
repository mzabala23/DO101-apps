require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@172.30.13.208:5432/contacts';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }