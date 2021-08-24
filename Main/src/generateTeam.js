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
        ${generateMembers}
    </body>
    </html>
    `;
}

const 

module.exports = generateTeam;