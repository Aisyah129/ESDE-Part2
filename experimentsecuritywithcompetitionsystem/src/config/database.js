const mysql = require('mysql');
const config = require('./config');
//To find out more on createPool:
//https://www.npmjs.com/package/mysql#pooling-connections

const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'esde-ecrypted-db.cw7fxxvw4imc.us-east-1.rds.amazonaws.com',
        user: 'LeastPrivilegedUser' ,
        password: 'LeastPrivileged@1' ,
        database: 'designCom' ,
        multipleStatements: true
    });

 module.exports=pool;
