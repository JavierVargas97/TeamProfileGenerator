//  Employee constructor imported
const Employee = require('./Employee');

// Engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // empoloyee role to Engineer
    getRole () {
        return "Engineer";
    }
}

// ready to be exported 
module.exports = Engineer;