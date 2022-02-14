// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generateMarkdown = require("./generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
console.log(generateMarkdown);
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Git hub username?"

  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"

  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?"

  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license do you want?",
    choices: ['MIT', 'Apache 2.0', 'GNU', 'Mozilla']
  },
  {
    type: "input",
    name: "install",
    message: "What are the installation instructions?"
  },
  {
    type: "input",
    name: "runTest",
    message: "What command should be run to run tests?"
  },
  {
    type: "input",
    name: "repoUse",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?"
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
   fs.writeFile("README.md", data, function(err) {
      if(err){
        console.log(Error);
      }
      else{
        console.log("Your file has been created.")
      }
   })
 }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    //console.log(answer);

    const template = generateMarkdown(answer)
    console.log(template);
    writeToFile(template);
  })
}

// Function call to initialize app
init();


