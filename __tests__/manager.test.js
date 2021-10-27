const Manager = require("../lib/manager");

describe("Manager", () => {
    it("getOfficeNum method", () => {
        const officenumber = 123405050;
        const manager = new Manager("Raimee Abbassi", 707, "raimeeab@gmail.com", officenumber);

        expect(manager.officenumber).toEqual(officenumber);
    });

    it("getRole method", () => {
        const role = "Manager";
        const manager = new Manager("Raimee Abbassi", 707, "raimeeab@gmail.com");

        expect(manager.getRole()).toEqual(role);
    })
})