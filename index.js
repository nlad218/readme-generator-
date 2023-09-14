// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "provide instruction for installation",
    name: "installation",
  },
  {
    type: "input",
    message: "provide instruction for usage",
    name: "usage",
  },
  {
    type: "list",
    message: "choose your license",
    choices: ["MIT", "APACHE 2.0", "BSD3", "Creative Commons", "none"],
    name: "license",
  },
  {
    type: "input",
    message: "provide insturctions for contributions to the project",
    name: "contributions",
  },
  {
    type: "input",
    message: "provide instruction for testing the project",
    name: "testing",
  },
  {
    type: "input",
    message: "provide your github username",
    name: "github",
  },
  {
    type: "input",
    message: "provide your email",
    name: "email",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("README.md", generateMarkdown(response), (err) => {
      if (err) console.log(err);
      console.log("Success!");
    });
  });
}

// Function call to initialize app
init();
