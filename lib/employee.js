//  Employee constructor file
class Employee {

    constructor (name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// returns the name from input

getName () {
    return this.name;
    }
// returns the id from input

getId () {
    return this.id;
 }
// returns the email from input

getEmail () {
    return this.email;
 }

// returns the github from input
getGithub () {
    return this.github;
 }

//returning employee type
getRole () {
    return 'Employee';
 }

//  returning the officeNumber from input
getRole(){
    return this.officeNumber;
}

}

// ready to be exported
module.exports = Employee;
