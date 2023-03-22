// Arquivo para configuraçoes iniciais da aplicação;


// Create dataBase if not exist; 
import mysql from "mysql2";


async function createDataBase(dbName,dbPassword) {

    // Open the connection to MySQL server
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: dbPassword,
    });

    // Run create database statement
    connection.query(
        `CREATE DATABASE IF NOT EXISTS ${dbName}`,
        function (err, results) {
            console.log(results);
            console.log(err||"None");
        }
    );

    // Close the connection
    connection.end();
}

export default createDataBase;