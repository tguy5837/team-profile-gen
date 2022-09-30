const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// get managers info
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number:"
        }
    ])
};

// ask to add an Engineer or an Intern
const promptEngineerOrIntern = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'Would you like to add an intern or an engineer?',
            choices: ['Engineer', 'Intern']
        }
    ])
};

// if Engineer, get NAME, ID, EMAIL, GITHUB then send back to add team member prompt
const promptNewEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email:"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the Engineer's GitHub username:"
        }
    ])
};

// if Intern, get NAME, ID, EMAIL, SCHOOL then send back to add team member prompt
const promptNewIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's email:"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school:"
        }
    ])
};

// call prompt functions
promptManager()
    .then(managerInfo => {
        // initialize team array
        const team = [];
        // create new Manager()
        const name = managerInfo.name;
        const id = managerInfo.id;
        const email = managerInfo.email;
        const officeNumber = managerInfo.officeNumber;

        const manager = new Manager(name, id, email, officeNumber);

        team.push(manager);

        console.log(team);

        promptEngineerOrIntern(team)
            .then(newMember => {
                if (newMember.newTeamMember === 'Engineer') {
                    promptNewEngineer()
                        .then(newEngineerInfo => {
                            team.push(newEngineerInfo);
                            console.log(team);
                        })
                } else {
                    console.log('Intern!')
                }
            })
    })