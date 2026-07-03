const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Koushik460",
    // database: "college2"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // CREATE DATABASE
    connection.query("CREATE DATABASE IF NOT EXISTS college2", function (err, result) {
        if (err) throw err;
        console.log("Database Created");
    });
});
