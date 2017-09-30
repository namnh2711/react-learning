const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'pass',
  port: 5432,
});

pool.connect();

pool.query('SELECT * from books', [], (err, res) => {
  console.log(err ? err.stack : res.rows); // Hello World!
  pool.end();
})
;
