const Employee = require("../lib/Employee");
const employee = new Employee("Jennifer Lopez", "67890", "jenniferlo@gmail.com");

describe("Employee", () => {
    test("constructor should return name, id, and email of the employee", () => {
        expect(employee.name).toBe("Jennifer Lopez");
        expect(employee.id).toBe("67890");
        expect(employee.email).toBe("jenniferlo@gmail.com");
    })

    test("getName() should return employee name", () => {
        expect(employee.getName()).toBe("Jennifer Lopez");
    })

    test("getId() should return employee id", () => {
        expect(employee.getId()).toBe("67890");
    })

    test("getEmail() should return employee email", () => {
        expect(employee.getEmail()).toBe("jenniferlo@gmail.com");
    })

    test("getRole() should return employee role", () => {
        expect(employee.getRole()).toBe("Employee");
    })

});