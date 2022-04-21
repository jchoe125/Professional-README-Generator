// function to create markdown for README
function createREADME(data) {
    return `# ${data.title}
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.license}-informational)](https://shields.io/category/license)
    ## Table of Contents 
    - [Description](#description)
    - [Table of Contents](#tableofcontents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Description:
    ${data.description}
    ## Table of Contents:
    ${data.tableofcontents}
    ## Installation:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## License:
    ${data.license}
    ## Contributing:
    ${data.contributing}
    ## Tests:
    ${data.tests}
    ## Questions:
    - Github: [${data.github}](https://github.com/${data.github})
    - Email: ${data.email} `;
}

module.exports = createREADME;