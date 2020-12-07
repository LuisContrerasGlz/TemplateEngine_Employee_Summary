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
    let t=render(employees);
    fs.writeFile(outputPath,t,{encoding:'utf8'},function(error){
        if(error){
            console.log('error: 4{error}');
        }else{
            console.log('ready');
        }
    });



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