const Manager = require("../lib/Manager");
const manager = new Manager("Rihanna Fenty", '09876', "rihanna@gmail.com","700")

describe("Manager", () => {
    test("constructor should return name, id, email, and office number of the manager", () => {
        expect(manager.name).toBe("Rihanna Fenty");
        expect(manager.id).toBe("09876");
        expect(manager.email).toBe("rihanna@gmail.com");
        expect(manager.officeNumber).toBe("700");
    })

    test("the getRole() should return the role of the manager", () => {
        expect(manager.getRole()).toBe("Manager");
    })

})