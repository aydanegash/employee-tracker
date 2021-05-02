const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

const config = {
    database: {
        host: "localhost",
        user: "root",
        password: "hello123",
        database: "employee_trackerDB"
    }
};

const connection = mysql.createConnection(config.database);
  
  
  connection.connect((err) => {
    if (err) throw err;
    mainMenu();
  });

  
  const mainMenu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'mainMenuOptions',
            choices: [
                'View',
                'Add',
                'Remove Employee', 
                'Update Employee Roles'
            ], 
        },
    ])
    .then((answer) => {
        switch (answer.action) {
          
            case 'View':
                viewoptions();
                break; 

            case 'Add':
              addOptions();
              break;
    
            case 'Remove Employee':
              removeEmployee();
              break;
    
            case 'Update Employee Roles':
              updateEmployeeRole();
              break;
    
            default:
              console.log(`Invalid action: ${answer.action}`);
              break;
          }
        });
  };

  const viewoptions = () => {
    inquirer
    .prompt({
        type: 'list',
        message: 'What would you like to view?',
        name: 'options',
        choices: [ 'View Employees', 'View Roles', 'View Departments'],
    })
    .then((answer) => {
        console.log(answer.choices);
    });``
  };

  const addoptions = () => {
    inquirer
    .prompt({
        type: 'list',
        message: 'What would you like to view?',
        name: 'options',
        choices: [ 'Add Employees', 'Add Roles', 'Add Departments'],
    })
    .then((answer) => {
        console.log('here are your emplyees');
    });
  };
 
 

