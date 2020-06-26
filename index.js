const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    //repo  name
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of this project?',
    },
    //repo description
    {   
        type: 'input',
        name: 'description',
        message: 'Please describe this project.',
        
    },
     //installation
     {   
        type: 'input',
        name: 'installation',
        message: 'Please describe how a user can install this application.',
        
    },
     //usage
     {   
        type: 'input',
        name: 'usage',
        message: 'Please describe how a user would use this application.',
        
    },
     //contribution
     {   
        type: 'input',
        name: 'contribution',
        message: 'Would you like other users to contribute to this project?',
        
    },
    //test
    {   
        type: 'input',
        name: 'test',
        message: 'Please describe how to run the tests.',
        
    },
     //license
     {   
        type: 'input',
        name: 'license',
        message: 'What license would you like to use? Ex: MIT, Apache, GPL... ',
        
    },
    //username
    {   
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        
    },
     //test
     {   
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        
    },
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
