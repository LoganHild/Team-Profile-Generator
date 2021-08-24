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
        <link rel="stylesheet" href="./output/style.css">
    </head>
    <body>
        <header class="container-fluid">
            <div class="col-12 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h2>${data.managerName}</h2>
                            <h3>Manager</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${data.managerID}</li>
                                <li class="list-group-item"><a href="mailto:${data.managerEmail}">Email: ${data.managerEmail}</a></li>
                                <li class="list-group-item">Office Number: ${data.office}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h2>${data.engineerName}</h2>
                            <h3>Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${data.engineerID}</li>
                                <li class="list-group-item">Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h2>${data.internName}</h2>
                            <h3>Intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${data.internID}</li>
                                <li class="list-group-item">Email: <a href="mailto:${data.internEmail}">${data.internEmail}</a></li>
                                <li class="list-group-item">School: ${data.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </body>
    </html>
    `;
}
module.exports = generateTeam;