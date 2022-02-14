// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {

    licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  } else if (license === "MIT") {

    licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  } else if (license === "GNU") {

    licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

  } else if (license === "Mozilla") {

    licenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

  } else {

    licenseLink = "";
  }

  
 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "Apache 2.0") {

    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"

  } else if (license === "MIT") {

    licenseLink = "https://choosealicense.com/licenses/mit/"

  } else if (license === "GNU") {

    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"

  } else if (license === "Mozilla") {

    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/"

  } else {

    licenseLink = "";
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'MIT' || license === 'Apache 2.0' || license === 'GNU' || license === 'Mozilla') {

    renderLicenseBadge();
    renderLicenseLink();
    
  } else {

    return ("");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licenses](#Licenses)
* [Contribute](#Contribute)
* [Test](#Test)
* [Questions](#Questions)


## Installation

${data.install}

## Usage

${data.repoUse}

## Licenses
${renderLicenseSection(data.license)}


## How to Contribute

${data.contribute}

## Test
${data.runTest}

## Questions
 
Git Hub username:
${data.username}

To reach me with additional questions please email me.  
${data.email}


`
};

module.exports = generateMarkdown;
