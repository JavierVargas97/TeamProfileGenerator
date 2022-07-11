// require and inquirer files
const inquirer = require("inquirer");
const fs = require("fs");

// Variables added from lib folder
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")


// Prompt welcome function 
function startingPrompt() {
    inquirer.prompt([
        {
            message: "///Welcome to Team Profile Generator! -  Please write your team name:///",
            name: "TeamNameExample"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })
}