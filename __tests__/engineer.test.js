const engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("getGitHub method", () => {
        const github = "raimeeab";
        const engineer = new Engineer("Raimee Abbassi", 707, "raimeeab@gmail.com", github);

        expect(engineer.github).toEqual(github);
    });

    it("getRole method", () => {
        const role = "Engineer";
        const engineer = new Engineer("Raimee Abbassi", 707, "raimeeab@gmail.com", github);

        expect(engineer.getRole()).toEqual(role);
    })
})