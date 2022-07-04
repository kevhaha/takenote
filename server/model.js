const db = require('./db.js');


let readAll = () => {
  let read = `SELECT * FROM notes`;
  return db.queryAsync(read);
}

let create = (note) => {
  console.log('db side', note);
  const noteObj = note;
  const string = `INSERT INTO notes (title, category, tagline, note) VALUES (?,?,?,?)`
  const array = [noteObj.title, noteObj.category, noteObj.tagline, noteObj.note];
  console.log('db array', array);
  return db.queryAsync(string, array);
}

module.exports.readAll = readAll;
module.exports.create = create;