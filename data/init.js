const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

class db {
  static database
  static connect() {
    open({
      filename: './data/SQLite.db',
      driver: sqlite3.Database
    }).then(db => {
      this.database = db
    })
  }
}

module.exports = db
