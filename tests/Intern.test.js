const Intern = require("../lib/Intern");
const intern = new Intern("Ben Affleck", "34567", "benaffleck@gmail.com", "University of California, Berkeley")

describe("Intern", () => {
    test("constructor should return name, id, email, and school of the intern", () => {
        expect(intern.name).toBe("Ben Affleck");
        expect(intern.id).toBe("34567");
        expect(intern.email).toBe("benaffleck@gmail.com");
        expect(intern.school).toBe("University of California, Berkeley");
    })

    test("getSchool() should return school name", () => {
        expect(intern.getSchool()).toBe("University of California, Berkeley");
    })

    test("getRole() should return role of intern", () => {
        expect(intern.getRole()).toBe("Intern");
    })

})