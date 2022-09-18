const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// creates path
const path = require("path");
const generateTeam = require("./generate_app/generateTeam.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [];

// asks if user wants to add an employee to team
const promptMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message:"Do you want to add a team member. If yes, choose one of the options below. If no, choose 'Done'",
        choices: ["Manager", "Intern", "Engineer", "Done"],
        name: "employeesMenu",
      },
    ])
    .then((choices) => {
      switch (choices.employeesMenu) {
        case "Manager":
          promptManager();
          break;
        case "Intern":
          promptIntern();
          break;
        case "Engineer":
          promptEngineer();
          break;
        default:
          makeTeam();
      }
    });
};

// prompts for engineer data
const promptEngineer = () => {
  console.log("Add an engineer to your team.");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the engineer.",
        name: "name",

        // validation for name input
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("You must enter a name for the engineer.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Enter the employee ID of the engineer.",
        name: "id",

        // validation for id input
        validate: (engineerId) => {
          if (engineerId) {
            return true;
          } else {
            console.log("You must enter an employee ID for the engineer.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Enter the employee email for the engineer.",
        name: "email",

        // validation for email input
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("You must enter the employee email for the engineer.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Enter the GitHub username for the engineer.",
        name: "gitHub",

        // validation for email input
        validate: (engineerGitHub) => {
          if (engineerGitHub) {
            return true;
          } else {
            console.log("You must enter the GitHub username of the engineer.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Enter the GitHub username link for the engineer.",
        name: "gitHubLink",

        // validation for email input
        validate: (engineerGitHubLink) => {
          if (engineerGitHubLink) {
            return true;
          } else {
            console.log(
              "You must enter the GitHub username link of the engineer."
            );
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      // gets responses
      console.log(responses);
      const engineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.gitHub,
        responses.gitHubLink
      );

      // pushes new engineer data to empty array
      team.push(engineer);
      console.log(team);

      // calling prompt menu, user can continue adding team members
      promptMenu();
    });
};

const promptIntern = () => {
  console.log("Add an intern to your team!");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the name of the intern.",
        name: "name",

        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("You must enter a name for the intern.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter  the employee ID of the intern.",
        name: "id",

        validate: (internId) => {
          if (internId) {
            return true;
          } else {
            console.log("You must enter the employee ID for the intern.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter  the employee email of the intern.",
        name: "email",

        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("You must enter the employee email for the intern.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter  the school of the intern.",
        name: "school",

        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("You must enter the school for the intern.");
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      console.log(responses);
      const intern = new Intern(
        responses.name,
        responses.id,
        responses.email,
        responses.school
      );
      team.push(intern);
      promptMenu();
    });
};

const promptManager = () => {
  console.log("Add a manager to your team.");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the name of the manager.",
        name: "name",

        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("You must enter a name for the manager.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter  the employee ID of the manager.",
        name: "id",

        validate: (managerId) => {
          if (managerId) {
            return true;
          } else {
            console.log("You must enter the employee ID for the manager.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter the employee email of the manager.",
        name: "email",

        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("You must enter the employee email for the manager.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Please enter the manager's office number.",
        name: "officeNumber",

        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("You must enter the office number for the manager.");
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      console.log(responses);
      const manager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.officeNumber
      );
      team.push(manager);
      promptMenu();
    });
};

const makeTeam = () => {
  console.log("Your team has been created.");

// conditional
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // writing file
  fs.writeFileSync(outputPath, generateTeam(team), "utf-8");
};

promptEngineer();
