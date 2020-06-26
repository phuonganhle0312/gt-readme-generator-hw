const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    // repo  name
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of this project?'
    },
    // repo description
    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project.'

    },
    // installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how a user can install this application.'

    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how a user would use this application.'

    },
    // contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Would you like other users to contribute to this project?'

    },
    // test
    {
        type: 'input',
        name: 'test',
        message: 'Please describe how to run the tests.'

    },
    // license
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ["license-GPL", new inquirer.Separator(), "license-Mozilla", new inquirer.Separator(), "license-Apache", new inquirer.Separator(), "license-MIT"],

    },
    // username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'

    },
    // email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'

    },


];

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => { 
        // create the first line # is used bc it is the main header of repo
        fs.appendFileSync("./generatedREADMEs/README.md", ("# " + response.repo) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
        //adds description from user input
        fs.appendFileSync("./generatedREADMEs/README.md", ("## Description" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
        //table of contents
        fs.appendFileSync("./generatedREADMEs/README.md", ("## Table of Contents" + '\n' + "1. [Installation . ](#installation)" + '\n' + "2. [Usage . ](#usage)"+ '\n' + "3. [Contribution . ](#contribution)" + '\n' + "4. [Tests . ](#test)" + '\n' + "5. [License . ](#license)" + '\n' + "5. [Questions . ](#username)" + '\n'), function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
         //adds installation from user input
         fs.appendFileSync("./generatedREADMEs/README.md", ("## Installation" + '\n' + response.installation) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
         //adds usage from user input
         fs.appendFileSync("./generatedREADMEs/README.md", ("## Usage" + '\n' + response.usage) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
         //adds contribution from user input
         fs.appendFileSync("./generatedREADMEs/README.md", ("## Contribution" + '\n' + response.contribution) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
         //adds test from user input
         fs.appendFileSync("./generatedREADMEs/README.md", ("## Tests" + '\n' + response.test) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
         //adds license from user input ------<a><img src="https://img.shields.io/badge/license-MIT-green"></img></a>
         fs.appendFileSync("./generatedREADMEs/README.md", ("## License" + '\n' + "<a><img src=\"https://img.shields.io/badge/" +response.license + "-green\"></img></a>") + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
        //adds username and email from user input
        fs.appendFileSync("./generatedREADMEs/README.md", ("## Questions" + '\n' + "https://github.com/" + response.username + '\n' + response.email) + '\n', function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("success")
            }
        })
    })

}

// function call to initialize program
init();
