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


const rolesAdd = () => {
    inquirer
    .prompt({
        name: 'roles',
        type: 'input',
        message: 'What roles would you like to add?',
    })
    .then((answer) => {
        const query = 'INSERT INTO roles SET ?';
        connection.query(query, { roles: answer.roles }, (err,res) => {
            if (err) console.log(err);
                
                console.log(res);
                runSearch();
            });
    
    })}

    
const empAdd = () => {
    inquirer
    .prompt({
        name: 'employee',
        type: 'input',
        message: 'What employee would you like to add?',
    })
    .then((answer) => {
        const query = 'INSERT INTO employee SET ?';
        connection.query(query, { employee: answer.employee }, (err,res) => {
            if (err) console.log(err);
                
                console.log(res);
                runSearch();
            });
    
    })}

const depView = () => {
    inquirer
    .prompt({
        name: 'employeeV',
        type: 'input',
        message: 'What department would you like to view?',
    })
.then((answer) => {
    const query = 'SELECT name FROM department WHERE ?';
    connection.query(query, { employeeV: answer.employeeV }, (err, res) =>{
        res.forEach(({employeeV}) => {
            console.log(
                `Name: ${employeeV}`
            );
        });
        runSearch();
    })
})
}


const roleView = () => {
    inquirer
    .prompt({
        name: 'rolev',
        type: 'input',
        message: 'What role would you like to view?',
    })
.then((answer) => {
    const query = 'SELECT title FROM role WHERE ?';
    connection.query(query, { roleV: answer.roleV }, (err, res) =>{
        res.forEach(({roleV}) => {
            console.log(
                `Role: ${roleV}`
            );
        });
        runSearch();
    })
})
}


const empView = () => {
    inquirer
    .prompt({
        name: 'employeeV',
        type: 'input',
        message: 'What employee would you like to view?',
    })
.then((answer) => {
    const query = 'SELECT first_name FROM employee WHERE ?';
    connection.query(query, { employeeV: answer.employeeV }, (err, res) =>{
        res.forEach(({employeeV}) => {
            console.log(
                `Name: ${employeeV}`
            );
        });
        runSearch();
    })
})
}

// const empUpdate = () =>{
//     inquirer
//     .prompt({
//         name: 'employeeU',
//         type: 'input',
//         message: 'What would you like to update?'
//     })
// .then((result) => {
    