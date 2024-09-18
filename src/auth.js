const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.send('Welcome to upsale!');
    } else {
      res.send('Invalid username or password');
    }
  });
});

module.exports = router;

