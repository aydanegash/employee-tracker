const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');

// const PORT =  8080;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
  
    password: 'hello123',
    // database: 'ice_creamDB',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
  });