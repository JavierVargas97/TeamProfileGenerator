//  Employee constructor imported
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // empoloyee role to intern
    getRole () {
        return "Intern";
    }
}

// ready to be exported 
module.exports = Intern;