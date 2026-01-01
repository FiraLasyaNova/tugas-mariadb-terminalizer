const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "nuaink70", //
  database: "perpustakaan",
  connectionLimit: 5
});

module.exports = pool;
