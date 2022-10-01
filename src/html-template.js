const generateManagerCard = manager => {
    return `
    <!-- MANAGER CARD -->
            <div class="card m-2" style="width: 18rem;">
                <div class="bg-info">
                    <h2 class="p-2 text-light">${manager.name}</h2>
                    <h3 class="px-2 text-light">${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <p class="card-text border p-2">ID: <a>${manager.get}</a></p>
                    <p class="card-text border p-2">Email: <a href="mailto:${manager.email}">${manager.email}</a>
                    </p>
                    <p class="card-text border p-2">Office Number: <a>${manager.officeNumber}</a></p>
                </div>
            </div>
            `;
};

const generateEngineerCard = engineer => {
    // add return html here from text below
};

const generateInternCard = intern => {
    // add return html here from text below
}

module.exports = team => {
    // slice manager off of array which will always be index 0 of team
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
        
            ${generateManagerCard(team)}


            <!-- ENGINEER CARD -->
            <div class="card m-2" style="width: 18rem;">
                <div class="bg-info">
                    <h2 class="p-2 text-light">Dave</h2>
                    <h3 class="px-2 text-light">Engineer</h3>
                </div>
                <div class="card-body">
                    <p class="card-text border p-2">ID: <a>2</a></p>
                    <p class="card-text border p-2">Email: <a href="mailto:dave@example.com">dave@example.com</a>
                    </p>
                    <p class="card-text border p-2">Github: <a
                            href="https://github.com/tguy5837/team-profile-gen">tguy5837</a>
                    </p>

                </div>
            </div>

            <!-- INTERN CARD -->
            <div class="card m-2" style="width: 18rem;">
                <div class="bg-info">
                    <h2 class="p-2 text-light">Doug</h2>
                    <h3 class="px-2 text-light">Intern</h3>
                </div>
                <div class="card-body">
                    <p class="card-text border p-2">ID: <a>3</a></p>
                    <p class="card-text border p-2">Email: <a href="mailto:doug@example.com">doug@example.com</a></p>
                    <p class="card-text border p-2">School: <a>UNC</a></p>

                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `
}