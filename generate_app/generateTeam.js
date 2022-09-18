// html to generate team page
const Employee = require("../lib/Employee");

const teamHTML = (teamMembers) => {
  // creates empty array to push team elements, looping to create team
  const teamHTMLArr = [];

  // creates functions with html for each team member
  const engineerDiv = (engineer) => {
    const engineerHTML = ` <div class="card">
        <img src="../images/engineer.png" alt="engineer icon">
        <div class="container">
            <h2><b>${engineer.name}</b></h2>
            <h3>Engineer</h3>
            <p>Email: <a href="mailto:${engineer.email}"></a>${engineer.email}</p>
            <p>Employee ID: ${engineer.id}</p>
            <p>GitHub: <a href="${engineer.gitHubLink}"></a>${engineer.gitHub}</p>
        </div>
    </div>
        `;
    teamHTMLArr.push(engineerHTML);
  };

  const managerDiv = (manager) => {
    const managerHTML = ` <div class="card">
        <img src="../images/manager.png" alt="manager icon">
        <div class="container">
            <h2><b>${manager.name}</b></h2>
            <h3>Manager</h3>
            <p>Email:<a href = "mailto:${manager.email}"></a>${manager.email}</p>
            <p>Employee ID: ${manager.id}</p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
        `;
    teamHTMLArr.push(managerHTML);
  };

  const internDiv = (intern) => {
    const internHTML = ` <div class="card">
        <img src="../images/intern.png" alt="intern icon">
        <div class="container">
            <h2><b>${intern.name}</b></h2>
            <h3>Intern</h3>
            <p>Email: <a href="mailto:${intern.email}"></a>${intern.email}</p>
            <p>Employee ID: ${intern.id}</p>
            <p>Education: ${intern.school}</p>
        </div>
    </div>
        `;
    teamHTMLArr.push(internHTML);
  };

  // for loop goes through function above and pushes to htmlArr
  for (let i = 0; i < teamMembers.length; i++) {
    // loops over entries
    if (teamMembers[i].getRole() === "Manager") {
      managerDiv(teamMembers[i]);
    }

    if (teamMembers[i].getRole() === "Engineer") {
      engineerDiv(teamMembers[i]);
    }

    if (teamMembers[i].getRole() === "Intern") {
      internDiv(teamMembers[i]);
    }
  }
  // need to join the array into a single string
  return teamHTMLArr.join("");
};

//
module.exports = (teamArr) => {
  return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="header-div">
        <h1 class="header">My Team</h1>
    </div>
    <div class="flex-container">
      ${teamHTML(teamArr)}
    </div>

    </body>
    </html>
    `;
};
