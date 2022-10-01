const generateManagerCard = manager => {
    return `
        <div class="card m-2" style="width: 18rem;">
            <div class="bg-info">
                <h2 class="p-2 text-light">${manager.getName()}</h2>
                <h3 class="px-2 text-light">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="card-text border p-2">ID: <a>${manager.getId()}</a></p>
                <p class="card-text border p-2">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </p>
                <p class="card-text border p-2">Office Number: <a>${manager.officeNumber}</a></p>
            </div>
        </div>
    `;
};

const generateEngineerCard = engineerArr => {
    // add return html here from text below
    const engineerHtmlArr = engineerArr.map(engineer => {
        return `<div class="card m-2" style="width: 18rem;">
            <div class="bg-info">
                    <h2 class="p-2 text-light">${engineer.getName()}</h2>
                    <h3 class="px-2 text-light">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="card-text border p-2">ID: <a>${engineer.getId()}</a></p>
                <p class="card-text border p-2">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </p>
                <p class="card-text border p-2">Github: <a
                            href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                </p>
            </div>
        </div>
        `;
    });

    return engineerHtmlArr.join(' ');
};

const generateInternCard = internArr => {
    // add return html here from text below
    const internHtmlArr = internArr.map(intern => {
        return `<div class="card m-2" style="width: 18rem;">
            <div class="bg-info">
                    <h2 class="p-2 text-light">${intern.getName()}</h2>
                    <h3 class="px-2 text-light">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="card-text border p-2">ID: <a>${intern.getId()}</a></p>
                <p class="card-text border p-2">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </p>
                <p class="card-text border p-2">School: <a${intern.getSchool()}</a></p>
            </div>
        </div>
        `;
    });

    return internHtmlArr.join(' ');
};

module.exports = teamArr => {
    // put manager into a variable
    const manager = teamArr[0];

    // remove manager from array
    const teamArrNoManager = teamArr.slice(1);

    // initialize engineer and intern array
    const engineerArr = [];
    const internArr = [];

    // create engineer array and intern array
    for (let i = 0; i < teamArrNoManager.length; i++) {
        if (teamArrNoManager[i].getRole() === 'Engineer') {
            engineerArr.push(teamArrNoManager[i]);
        } else if (teamArrNoManager[i].getRole() === 'Intern') {
            internArr.push(teamArrNoManager[i]);
        }
    };

    // make sure to get the object OUT of the array and don't send the actual array
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Portfolio</title>
</head>

<body>
    <header class="d-flex justify-content-center p-4 bg-secondary text-light">
        <h1>My Team</h1>
    </header>
    <main>
        <div class="container d-flex flex-wrap justify-content-center p-5">
        
            <!-- MANAGER CARD -->
            ${generateManagerCard(manager)}

            <!-- ENGINEER CARD(s) -->
            ${generateEngineerCard(engineerArr)}

            <!-- INTERN CARD(s) -->
            ${generateInternCard(internArr)}

        </div>
    </main>
</body>

</html>
    `
};