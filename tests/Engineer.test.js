const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Jennyfer Constanza", "12345", "jennyferislas@gmail.com", "jennyferconstanza", "https://github.com/jennyferconstanza");

describe("Engineer", () => {
    test("constructor should return name, id, email, and gh username of the engineer", () => {
        expect(engineer.name).toBe("Jennyfer Constanza");
        expect(engineer.id).toBe("12345");
        expect(engineer.email).toBe("jennyferislas@gmail.com");
        expect(engineer.gitHub).toBe("jennyferconstanza");
        expect(engineer.gitHubLink).toBe("https://github.com/jennyferconstanza");
    })

    test("getGitHub() should return GitHub username of the engineer", () => {
        expect(engineer.getGitHub()).toBe("jennyferconstanza");
    })

    test("getRole() should return role of the engineer", () => {
        expect(engineer.getRole()).toBe("Engineer");
    })

})