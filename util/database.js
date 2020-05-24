const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '(GTa8?n6vpn73Hg4gdTc'
});

module.exports = pool.promise();