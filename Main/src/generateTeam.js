const Employee = require("../lib/Employee");

//generates framework for HTML
function generateTeam(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="../dist/css/style.css">
    </head>
    <body>
        <header class="container-fluid">
            <div class="col-12 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="row">
            ${data}
            </div>
        </div> 
        <script src="https://kit.fontawesome.com/cb319df913.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

//creates array from passed Employees []
function array(data) {
    const team = [];
    const managerArray = data.filter(Employee => Employee.getRole() === 'Manager');

    managerArray.forEach(Manager => {

        const section = `
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card col-sm-12 col-lg-4">
                        <div class="card-header">
                            <h2>${Manager.name}</h2>
                            <i class="fas fa-mug-hot" style="font-size: 48px;"></i>
                            <h3>Manager</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Manager.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                                <li class="list-group-item">Office Number: ${Manager.office}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;

        team.push(section);
    });

    const engineerArray = data.filter(Employee => Employee.getRole() === 'Engineer');

    engineerArray.forEach(Engineer => {

        const section = `
                <div class="team-member col-lg-4 d-flex justify-content-center">
                    <div class="card col-sm-12">
                        <div class="card-header">
                            <h2>${Engineer.name}</h2>
                            <i class="fas fa-laptop" style="font-size: 48px;"></i>
                            <h3>Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Engineer.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;

        team.push(section);
    });

    const internArray = data.filter(Employee => Employee.getRole() === 'Intern');

    internArray.forEach(Intern => {

        const section = `
                <div class="team-member col-lg-4 d-flex justify-content-center">
                    <div class="card col-sm-12">
                        <div class="card-header">
                            <h2>${Intern.name}</h2>
                            <i class="fas fa-glasses" style="font-size: 48px;"></i>
                            <h3>Intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Intern.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                                <li class="list-group-item">School: ${Intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;    

        team.push(section);
    });

    const group = team.join("");
    const dreamTeam = generateTeam(group);

    return dreamTeam;
}


module.exports = array;