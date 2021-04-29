const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');



const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
  
    password: 'hello123',
    database: 'employee_trackerDB',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
  });