const inquirer = require('inquirer');
const fs = require('fs');
const templateREADME = require('./templateREADME');


// Prompt array to ask the user
const questions = [
    // Project title
    {
        type: 'input',
        name: 'Title',
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
        name: 'Description',
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
        name: 'Table of Contents',
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
        name: 'Installation',
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
        name: 'Usage',
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
        name: 'License',
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
        name: 'Contribution',
        message: 'How should people contribute to this app? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
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
        name: 'Testing',
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
        name: 'Questions',
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
        name: 'Questions',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(userInput) {
            console.log(userInput)
            writeToFile("README.md", templateREADME(userInput));
        });
};

// Function call to initialize app
init();