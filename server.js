const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const util = require('util');

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
              {
                name: 'View employees',
                value: 'View_Employees'
              },
              {
                name: 'View roles',
                value: 'View_Roles'
              },
              {
                name: 'View deparments',
                value: 'View_departments'
              },
              {
                name: 'Add employee',
                value: 'Add_employee'
              },
              {
                name: 'Add role',
                value: 'Add_role'
              },
              {
                name: 'Add department',
                value: 'Add_department'
              },

              {
                name: 'Update employee role',
                value: 'Update_employee_role'
              }, 
            ], 
        },
    ])
    switch (choice) {
      case 'View_Employees':
        return ;
      case 'View_roles':
        return ;
      case 'View_deparments':
        return ;
      case 'View_deparments':
        return ;
      case 'Add_employee':
        return ;
      case 'Add_role':
        return ;
      case 'Add_department':
        return ;
      case 'Update_employee_role':
        return ;
      default:
        return ;
    }
  }

  

 

