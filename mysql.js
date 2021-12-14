var mysql = require('mysql');
var express = require('express');
var app=express()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"chat_db"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE chatdbTable (id INT AUTO_INCREMENT PRIMARY KEY,user VARCHAR(255), text VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
