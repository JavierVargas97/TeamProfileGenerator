//  Employee constructor imported
const Employee = require("./Employee");

// Engineer constructor extends employee constructor 
class Engineer extends Employee {
    
    constructor (name, id, email, github) {
        // calling employee constructor
        super (name, id, email); 
        
        this.github = github; 
    }

    // empoloyee role to Engineer
    getRole () {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}

// ready to be exported 
module.exports = Engineer;