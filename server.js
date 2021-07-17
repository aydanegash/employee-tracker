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
      case 'View roles':
        return viewEmployeesByDepartment();
      case 'View deparments':
        return viewEmployeesByManager();
      case "ADD_EMPLOYEE":
        return addEmployee();
      case "REMOVE_EMPLOYEE":
        return removeEmployee();
      case "UPDATE_EMPLOYEE_ROLE":
        return updateEmployeeRole();
      case "UPDATE_EMPLOYEE_MANAGER":
        return updateEmployeeManager();
      case "VIEW_DEPARTMENTS":
        return viewDepartments();
      case "ADD_DEPARTMENT":
        return addDepartment();
      case "REMOVE_DEPARTMENT":
        return removeDepartment();
      case "VIEW_ROLES":
        return viewRoles();
      case "ADD_ROLE":
        return addRole();
      case "REMOVE_ROLE":
        return removeRole();
      default:
        return quit();
    }
  }
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
 
 

