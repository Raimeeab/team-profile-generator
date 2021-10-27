const Intern = require("../lib/intern");

describe("Intern", () => {
    it("getSchool method", () => {
        const school = "USYD"
        const intern = new Intern("Raimee Abbassi", 707, "raimeeab@gmail.com", school);

        expect(intern.school).toEqual(school);
    });

    it("getRole method", () => {
        const role = "Intern";
        const intern = new Intern("Raimee Abbassi", 707, "raimeeab@gmail.com");

        expect(intern.getRole()).toEqual(role);
    })
})