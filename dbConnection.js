const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
//   database: 'test',
  database: 'GTR2',
  password: '240298Ak!',
  port: 5432, // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};