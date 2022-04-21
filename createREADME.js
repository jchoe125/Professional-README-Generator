// function to create markdown for README
function createREADME(answers) {
    return `# ${answers.title}
  ## Licensing:
  ![license](https://img.shields.io/badge/license-${answers.license}-informational)

  #### Table of Contents 
  - [Description](#description)
  - [Table of Contents](#tableofcontents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  * ${answers.description}

  ## Table of Contents:
  * ${answers.tableofcontents}

  ## Installation:
  * ${answers.installation}

  ## Usage:
  * ${answers.usage}

  ## License:
  * ${answers.license}

  ## Contributing:
  * ${answers.contributing}

  ## Tests:
  * ${answers.testing}

  ## Questions:
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github});
  * Email: ${answers.email} `;
}

module.exports = createREADME;