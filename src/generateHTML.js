const generateHTML = (manager, engineers, interns) => {
    // console.log(manager, engineer, intern) 
    // const generateManager = (manager) =>{
    //     return `<li>${intern.getId} </>`
    // }

    let html = "";
    html += `
<!-- Manager card -->
<div class="card">
    <div class="card-header text-center">
        <h2 class="card-title">${manager[0].name}</h2>
        <h3 class="card-title role"><i class="fab fa-teamspeak icon"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager[0].id}</li>
            <li class="list-group-item"><i class="far fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:${manager[0].name}">${manager[0].name}</a></li>
            <li class="list-group-item"><i class="fas fa-phone-alt" aria-hidden="true"></i> Office number: <a href="tel:${manager[0].officenumber} target="_blank">${manager[0].officenumber}</a></li>
        </ul>
    </div>
</div>`
    engineers.foreach( (engineer) => {
        // will create a new card for every element insdie engineer array
        html += `
<!-- Engineer card(s) -->
<div class="card">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title text-center role"><i class="fas fa-glasses icon"></i> Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item"><i class="far fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:${engineer.name}">${engineer.name}</a></li>
            <li class="list-group-item"><i class="fab fa-github"></i> GitHub Username: ${engineer.github}</li>
        </ul>
    </div>
</div>`
    });
    interns.foreach( (intern) => {
        html += `
<!-- Intern card(s) -->
<div class="card">
    <div class="card-header text-center">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title text-center role"><i class="fab fa-earlybirds icon"></i> Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item"><i class="far fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:${intern.name}">${intern.name}</a></li>
            <li class="list-group-item"><i class="fas fa-graduation-cap"></i> School: ${intern.school}</li>
        </ul>
    </div>
</div>`
    })

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Command-line generated HTML for a team project">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" 
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/stylesheet.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 header">
                <h1 class="text-center"><i class="fas fa-users"></i> My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">   
                ${html}
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script> 
</body>
</html>`
}
module.exports = generateHTML;