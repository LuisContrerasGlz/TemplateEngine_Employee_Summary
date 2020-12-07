const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


employees =[];

function thisisend(){
    console.log("termine");
    console.log(employees);
    render(employees);
}

function new_engineer(){
    console.log("your select is an Engineer");
    inquirer.prompt([
        {
            type: "input",
            name: "mameEngineer", 
            message: "What is the Engineer's Name? "
        },
        {
            type: "input",
            name: "idEngineer", 
            message: "What is the Engineer's ID? "
        },
        {
            type: "input",
            name: "emailEngineer", 
            message: "What is your Engineer' email? "
        },
        {
            type: "input",
            name: "gitEngineer", 
            message: "What is your Engineer's github username? "
        },
        {
            type: "list",
            name: "optMember", 
            message: "Wich type of team member wold you like to add? ",
            choices: ["Engineer","Intern","I don´t want to add any more team members"]
        }
    ])
    .then(engineers => {
        console.log('engineers');
        let e = new Engineer.Engineer(engineers.mameEngineer,engineers.idEngineer, engineers.emailEngineer, engineers.gitEngineer);
        employees.push(e);
        //console.log(e.getName());
        //console.log(e.getId());
        //console.log(e.getEmail());
        //console.log(e.getGithub());
        //console.log(e.getRole());
        if (engineers.optMember=="Engineer"){
            new_engineer();
        }else{
            if (engineers.optMember=="Intern"){
                new_intern();
            }else{
                thisisend();
            }
        
        }

    })
}


function new_intern(){
    console.log("your select is an intern");
    inquirer.prompt([
        {
            type: "input",
            name: "mameIntern", 
            message: "What is the Intern's Name? "
        },
        {
            type: "input",
            name: "idIntern", 
            message: "What is the Intern's ID? "
        },
        {
            type: "input",
            name: "emailIntern", 
            message: "What is your Intern's email? "
        },
        {
            type: "input",
            name: "schoolIntern", 
            message: "What is your Intern's school? "
        },
        {
            type: "list",
            name: "optMember", 
            message: "Wich type of team member wold you like to add? ",
            choices: ["Engineer","Intern","I don´t want to add any more team members"]
        }
    ])
    .then(interns => {
        console.log('interns');
        let e = new Intern.Intern(interns.mameIntern,interns.idIntern, interns.emailIntern, interns.schoolIntern);
        employees.push(e);
        //console.log(e.getName());
        //console.log(e.getId());
        //console.log(e.getEmail());
        //console.log(e.getSchool());
        //console.log(e.getRole());
        if (interns.optMember=="Engineer"){
            new_engineer();
        }else{
            if (interns.optMember=="Intern"){
                new_intern();
            }else{
                thisisend();
            }
        
        }
    })
}




inquirer.prompt([
    {
        type: "input",
        name: "nameManager", 
        message: "What is your Manager's Name? "
    },
    {
        type: "input",
        name: "idManager", 
        message: "What is your Manager's ID? "
    },
    {
        type: "input",
        name: "emailManager", 
        message: "What is your Manager's email? "
    },
    {
        type: "input",
        name: "oficceManager", 
        message: "What is your Manager's Office Number? "
    },
    {
        type: "list",
        name: "optMember", 
        message: "Wich type of team member wold you like to add? ",
        choices: ["Engineer","Intern","I don´t want to add any more team members"]
    }
])
.then(managers => {

    console.log('managers');
    let m = new Manager.Manager(managers.nameManager,managers.idManager, managers.emailManager, managers.oficceManager);
    employees.push(m);
    //console.log(m.getName());
    //console.log(m.getId());
    //console.log(m.getEmail());
    //console.log(m.getOfficeNumber());
    //console.log(m.getRole());
    if (managers.optMember=="Engineer"){
        new_engineer();
    }else{
        if (managers.optMember=="Intern"){
            new_intern();
        }else{
            thisisend();
        }
    }
})

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
