const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function main() {
  const dbName = process.env.DB_NAME;
  const sqlPath = path.join(__dirname, '..', 'database', 'schema.sql');
  let sql = fs.readFileSync(sqlPath, 'utf8');

  sql = sql
    .replace(/^\s*DELIMITER\s+.+$/gim, '')
    .replace(/\/\/\s*$/gm, ';')
    .replace(/^\s*CREATE DATABASE IF NOT EXISTS\s+.*?;\s*$/gim, '')
    .replace(/^\s*USE\s+.*?;\s*$/gim, '');

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
  });

  await connection.query(`DROP DATABASE IF EXISTS \`${dbName}\`;`);
  await connection.query(`CREATE DATABASE \`${dbName}\`;`);
  await connection.query(`USE \`${dbName}\`;`);
  await connection.query(sql);

  console.log('Schema loaded successfully.');
  await connection.end();
}

main().catch((err) => {
  console.error('Schema load failed.');
  console.error(err);
  process.exit(1);
});
