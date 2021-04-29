const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'userChoices',
            choices: ['View all Employees', 'Add Employee', 'Remove Employee', 'Add Department', 'View Department', 'Add Role', 'View Roles', 'Update Employee Roles'], 
        },
    ]);
       