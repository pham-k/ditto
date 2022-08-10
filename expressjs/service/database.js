// get the client
const mysql = require('mysql2');
const config = require('../credential/db')

// Create the connection pool. The pool-specific settings are the defaults
const conn = mysql.createPool(config);


// simple query
// connection.query(
//   'SELECT * FROM Class',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

module.exports = conn;

