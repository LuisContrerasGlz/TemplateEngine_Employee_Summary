// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let employee = require("./Employee");
class Engineer  extends employee.Employee {
    constructor(name,id,email,github){
        super();
        this.name=name;
        this.id=id;
        this.email=email;
        this.github=github;

    }



    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }

}

module.exports.Engineer=Engineer;