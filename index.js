const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");
const team = [];

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
      team.push(manager);
    });
};
createTeam();
