const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub, gitHubLink) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.gitHubLink = gitHubLink;
  }

  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
