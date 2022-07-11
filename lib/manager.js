//  Employee constructor imported
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // empoloyee role to manager
    getRole () {
        return "Manager";
    }
}

// ready to be exported 
module.exports = Manager; 