const mysql = require ('mysql');
const inquirer = require ('inquirer');
const { start } = require('repl');
const connection = mysql.createConnection({
    host: 'localhost',
    
    port: 3306,

    user: 'root',

    password: 'Ezequ1a1e3^+=%<>',
    database: 'employee_tracker',
});

connection.connect((err) => {
    if (err) throw err  
    runSearch();
});

const runSearch = () => {
    inquirer
    .prompt({
        name: 'start',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'Add Departments',
            'Add Roles',
            'Add Employees',
            'View Departments',
            'View Roles',
            'View Employees',
            'Update Employee role',
        ],
    })

    .then((answer) => {
        switch (answer.start) {
            case 'Add Departments':
            depAdd();
            break;

            case 'Add Roles':
            rolesAdd();
            break;

            case 'Add Employees':
            empAdd();
            break;

            case 'View Departments':
            depView();
            break;

            case 'View Roles':
            roleView();
            break;

            case 'View Employees':
            empView();
            break;

            case 'Update Employee role':
            empUpdate();
            break;

            default:
            console.log('Invalid action: ${answer.start}');
            break;
        }
    });
};

const depAdd = () => {
inquirer
.prompt({
    name: 'name',
    type: 'input',
    message: 'What department would you like to add?',
})
.then((answer) => {
    const query = 'INSERT INTO department SET ?';
    connection.query(query, { name: answer.name }, (err,res) => {
        if (err) console.log(err);
            
            console.log(res);
            runSearch();
        });

})}


