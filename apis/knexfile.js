// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    // connection: 'postgres://localhost/message_dev'
    },
  test: {
    client: 'pg',
    // connection: 'postgres://localhost/message_test'
    },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    },

};
