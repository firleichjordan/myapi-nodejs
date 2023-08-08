const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "warehouse"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connection success !");
});

module.exports = connection;

// const Sequelize = require("sequelize");
// const db = new Sequelize("warehouse", "root", "root123", {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = db;
