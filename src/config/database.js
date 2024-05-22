import {} from "dotenv/config.js";
import mysql from "mysql2";

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
});

function query(command, params, method = 'query'){
    return new Promise(function(resolve, reject){
        con[method](command, params, function(error, result){
            if(error)
                reject(error)
            else
            resolve(result)
        });
    });
}
export {con, query};