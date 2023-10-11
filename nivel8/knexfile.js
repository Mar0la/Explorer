const path = require('path')
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'db', 'database.db')
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'db', 'knex', 'migrations')
    },
    useNullAsDefault: true
  }
}
