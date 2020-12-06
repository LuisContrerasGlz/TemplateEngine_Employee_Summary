const inquirer = require('inquirer');

function engineer(){
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
        console.log('engineers', engineers);
        if (engineers.optMember=="Engineer"){
            engineer();
        }else{
            if (engineers.optMember=="Intern"){
                intern();
            }
        
        }

    })
}


function intern(){
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
        console.log('interns', interns);
        if (interns.optMember=="Engineer"){
            engineer();
        }else{
            if (interns.optMember=="Intern"){
                intern();
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
        name: "IDManager", 
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
.then(questions => {
    console.log('Questions', questions);
    if (questions.optMember=="Engineer"){
        engineer();
    }else{
        if (questions.optMember=="Intern"){
            intern();
        }
    
    }

})



