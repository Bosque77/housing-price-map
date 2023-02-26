// Get an instance of mysql we can use in the app
const mariadb = require('mariadb');

// Create a 'connection pool' using the provided credentials
const pool = mariadb.createPool({
    host: 'database-2.cfwdc7czuhxu.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'tester123!',
    database: 'innodb',
    connectionLimit: 5
  });

// Export it for use in our application
module.exports.pool = pool;