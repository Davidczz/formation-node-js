const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'formationnode',
    password: 'david845514'
});

module.exports = pool.promise();