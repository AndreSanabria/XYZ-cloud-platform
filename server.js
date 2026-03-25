const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'xyz_user',
  password: process.env.DB_PASSWORD || 'xyz_password',
  database: process.env.DB_NAME || 'XYZ'
});

app.post('/query', (req, res) => {
  const { sql } = req.body;

  if (!sql) {
    return res.status(400).json({ error: 'No SQL query provided.' });
  }

  connection.query(sql, (err, results, fields) => {
    if (err) {
      return res.status(400).json({ error: err.sqlMessage || err.message });
    }

    res.json({ results, fields });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
