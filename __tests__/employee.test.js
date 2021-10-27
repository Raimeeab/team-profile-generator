// Testing employee constructor
const { TestWatcher } = require("jest");
const Employee = require("../lib/employee");
const employee = require("../lib/employee");

describe("Employee", () => {
    it("Should create Employee constructor", () => {
        const employee = new Employee("Raimee Abbassi", 707, "raimeeab@gmail.com");

        expect(typeof(Employee).toEqual("object"))
    });

    it("Should create name in employee constructor param", () => {
        const name = "Raimee Abbassi";
        const employeeName = new Employee(name);
        
        expect(Employee.name).toEqual(name);
    });

    it("Should create employee ID in constructor param", () => {
        const testId = 707;
        const employeeId = new Employee("Raimee Abbassi", testId);
    
        expect(typeof(Employee.id).toBe("Number"));
        expect(Employee.id).toEqual(id);
    });
});
