const mysql = require('mysql2');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

const db = Promise.promisifyAll(connection);

// {multiArgs: true}


// let readAll = () => {
//   let read = `SELECT * FROM notes`;
//   return db.queryAsync(read);
// }

module.exports = db;