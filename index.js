const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const path = require("path");
const directory = path.resolve(__dirname, "dist");
const output = path.join(directory, "index.html");
const teamArr = [];

const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team manager name:",
      },
      {
        type: "input",
        name: "id",
        message: "Manager ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Manager email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Manager office number:",
      },
    ])
    .then((userInput) => {
      console.log(userInput);
      const manager = new Manager(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.officeNumber
      );
      teamArr.push(manager);
      buildTeam();
    });
};

const buildTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "buildTeam",
        message: "What would you like to do next?",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.buildTeam) {
        case "add an engineer":
          addEngineer();
          break;
        case "add an intern":
          addIntern();
          break;
        case "finish building my team":
          finishTeam();
      }
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer name:",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Engineer GitHub username:",
      },
    ])
    .then((userInput) => {
      console.log(userInput);
      const engineer = new Engineer(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.github
      );
      teamArr.push(engineer);
      buildTeam();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern name:",
      },
      {
        type: "input",
        name: "id",
        message: "Intern ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Intern school:",
      },
    ])
    .then((userInput) => {
      console.log(userInput);
      const intern = new Intern(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.school
      );
      teamArr.push(intern);
      buildTeam();
    });
};

const finishTeam = () => {
  console.log("Team created!");

  fs.writeFileSync(output, generatePage(teamArr), "UTF-8");
};

createTeam();
