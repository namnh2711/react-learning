const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'pass',
  port: 5432,
});

pool.connect();

const express = require('express');

const router = express.Router();


router.get('/books', (req, res) => {
  pool.query('SELECT * from books', [], (err, resp) => {
    res.send(err ? err.stack : resp.rows);
  });
});

router.get('/books/:bookId/ratings', (req, res) => {
  pool.query('SELECT * from reviews where book_id = $1', [req.params.bookId], (err, resp) => {
    res.send(err ? err.stack : resp.rows);
  });
});

export default router;
