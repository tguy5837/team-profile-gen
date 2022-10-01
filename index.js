const inquirer = require('inquirer');
const generateHTML = require('./src/html-template');

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
            message: 'Would you like to add an Engineer, an Inter, or finish?',
            choices: ['Add Engineer', 'Add Intern', 'Finish - Create my team portfolio!']
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
            name: 'github',
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
    .then(async managerInfo => {
        // initialize team array
        const team = [];

        // create easy variables
        const name = managerInfo.name;
        const id = managerInfo.id;
        const email = managerInfo.email;
        const officeNumber = managerInfo.officeNumber;

        // create new Manager()
        const manager = new Manager(name, id, email, officeNumber);

        // add manager to team
        team.push(manager);

        // set team capacity
        const teamCapacity = 15;

        // initialize loop
        let continuePrompt = true;

        while (continuePrompt) {
            await promptEngineerOrIntern(team)
                .then(async newMember => {

                    if (newMember.newTeamMember === 'Add Engineer') {
                        await promptNewEngineer()
                            .then(engineerInfo => {
                                // create easy engineer variables
                                const name = engineerInfo.name;
                                const id = engineerInfo.id;
                                const email = engineerInfo.email;
                                const github = engineerInfo.github;

                                // create new Engineer()
                                const engineer = new Engineer(name, id, email, github);

                                // add engineer to team
                                team.push(engineer);

                            })
                    } else if (newMember.newTeamMember === 'Add Intern') {
                        await promptNewIntern()
                            .then(internInfo => {
                                // create easy engineer variables
                                const name = internInfo.name;
                                const id = internInfo.id;
                                const email = internInfo.email;
                                const school = internInfo.school;

                                // create new Engineer()
                                const intern = new Intern(name, id, email, school);

                                // add intern to team
                                team.push(intern);

                            })
                    } else {
                        // create HTML with team
                        continuePrompt = false;
                        return team;
                    }

                })
        }
    })
    .then(team => {
        generateHTML(team)
    })
