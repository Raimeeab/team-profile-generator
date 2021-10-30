// Testing employee constructor
const { TestWatcher } = require("jest");
const Employee = require("../lib/employee");


describe("Employee", () => {
    it("Should create Employee constructor", () => {
        const employee = new Employee("Raimee Abbassi", 707, "raimeeab@gmail.com");

        expect(typeof(employee)).toEqual("object");
    });

    it("Should create employee name in constructor param", () => {
        const name = "Raimee Abbassi";
        const employee = new Employee(name);
        
        expect(employee.name).toEqual(name);
    });

    it("Should create employee ID in constructor param", () => {
        const testId = 707;
        const employee = new Employee("Raimee Abbassi", 707);
    
        expect(typeof(employee.id)).toEqual("number");
        expect(employee.id).toEqual(testId);
    });


    it("Should create employee email in constructor param", () => {
        const email = "raimeeab@gmail.com";
        const employee = new Employee("Raimee Abbassi", 707, "raimeeab@gmail.com");
    
        expect(employee.email).toEqual(email);
    });
});
