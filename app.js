const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

//This function start de form for add members team
function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

//This function render html template file.

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
       <link rel="stylesheet" type="text/css" href="css/bootsrap.min.css">
        <link rel="stylesheet" href="./style.css">
          
        <title>Team Profile Generator</title>
    </head>
    
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand col-sm-12 d-flex justify-content-center  mb-0 h1">Team Profile Generator</span>
      </div>
    </nav>
    <body>
        <div class="container">
            <div class="row">
                <div class="card-columns"></div>
                <div class="team-area col-12 d-flex justify-content-center card-deck">
                    <div class="card employee-card my-5 my-5"</div>`;
    fs.writeFile("./output/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}
 //This function create engineer member info.
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        // const officeNumber = member.officeNumber();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="card-header bg-primary">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>(Engineer)</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;

         //This function create intern member info.
        } else if (role === "Intern") {
            const College = member.getCollege();
            data = `<div class="card employee-card my-5">
            <div class="card-header bg-primary">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>(Intern)</h3>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">College: ${College}</li>
            </ul>
            </div>
        </div>`;
        }
        //This function create manager member info.
        else if (role === "Manager") {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="card employee-card my-5">
            <div class="card-header bg-primary ">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>(Manager)</h3>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
        }

    console.log("adding team member");
     fs.appendFile("./output/index.html", data, function (err) {
        if (err) {
        return reject(err);
            };
        return resolve();
            });
            });
            }

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

 fs.appendFile("./output/index.html", html, function (err) {
    if (err) {
     console.log(err);
 };
 });
    console.log("end");
 }

initApp();