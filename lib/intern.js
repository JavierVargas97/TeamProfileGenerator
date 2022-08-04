//  Employee constructor imported
const Employee = require("./Employee");

// intern constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, id, email, college) {
        // calling employee constructor
        super (name, id, email); 
        
        this.college = college; 
    }

    // empoloyee role to intern
    getRole () {
        return "Intern";
    }

    getCollege() {
        return this.college
    }
}



// ready to be exported 
module.exports = Intern;