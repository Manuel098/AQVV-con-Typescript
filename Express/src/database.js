const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        switch(err.code){
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('Database conection was closed');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('Database has to many conections');
                break;
            case 'ECONNREFUSED':
                console.error('Database conection was refused');
                break;
            default:
                console.error('Strange Error');
        }
    }

    if(connection){
        connection.release();
        console.log('DB is connect');
    }

    return;
});

pool.query = promisify(pool.query);

module.exports = pool;
