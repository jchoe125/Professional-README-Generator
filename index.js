const inquirer = require('inquirer');
const fs = require('fs');
const createREADME = require('./createREADME');


// Prompt array to ask the user
const questions = [
    // Project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the app? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title in order to continue');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the app (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description in order to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Provide a table of contents (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a table of contents in order to continue');
                return false;
            }
        }
    },
    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info in order to continue');
                return false;
            }
        }
    },
    // Usage info
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of this app (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use use this app in order to continue');
                return false;
            }
        }
    },
    // License options
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must pick a license for the project in order to continue');
                return false;
            }
        }
    },
    // Contribution info
    {
        type: 'input',
        name: 'contributing',
        message: 'How should people contribute to this app? (Required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('You need to provide information on how other developers should contribute to this app in order to continue');
                return false;
            }
        }
    },
    // Test instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project in order to continue');
                return false;
            }
        }
    },
    // Questions
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username in order to continue');
                return false;
            }
        }
    },
    // Questions
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address if developers want to reach you with additional questions (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address in order to continue');
                return false;
            }
        }
    },
]

// Function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => {
        if (err)
            throw err;
        console.log('Success - your README file has been generated')
    });
};

// Function to initialize app
function start() {
    inquirer.prompt(questions)
        .then(function(userInput) {
            console.log(userInput)
            writeToFile("README1.md", createREADME(userInput));
        });
};

// Function call to initialize app
start();