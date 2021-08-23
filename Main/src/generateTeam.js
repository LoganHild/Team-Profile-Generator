function generateTeam(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
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
                        <h2>Manager</h2>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Name</li>
                                <li class="list-group-item">ID</li>
                                <li class="list-group-item">Office Number</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h2>Engineer</h2>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Name</li>
                                <li class="list-group-item">ID</li>
                                <li class="list-group-item"><a href="mailto:Email@gmail.com">Email</a></li>
                                <li class="list-group-item"><a href="https://github.com/user" target="_blank">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-member col-12 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            <h2>Intern</h2>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Name</li>
                                <li class="list-group-item">ID</li>
                                <li class="list-group-item"><a href="mailto:Email@gmail.com">Email</a></li>
                                <li class="list-group-item">School</li>
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