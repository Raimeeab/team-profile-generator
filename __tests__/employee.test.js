// Testing employee constructor
const { TestWatcher } = require("jest");
const Employee = require("../lib/employee");
const employee = require("../lib/employee");

describe("Employee", () => {
    it("Should create Employee constructor", () => {
        const employee = new Employee("Raimee Abbassi", 707, "raimeeab@gmail.com");

        expect(typeof(employee).toEqual("object"))
    });

    it("Should create name in employee constructor param", () => {
        const name = "Raimee Abbassi";
        const employeeName = new employee(name);
        
        expect(employee.name).toEqual(name);
    });

    it("Should create employee ID in constructor param", () => {
        const testId = 707;
        const employeeId = new employee("Raimee Abbassi", testId);
    
        expect(typeof(employee.id).toBe("Number"));
        expect(employee.id).toEqual(id);
    });
});
