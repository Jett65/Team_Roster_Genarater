const makeUser = require("../makeUser");

describe("makeUser",() => {
    describe("Employee",() => {
        it("Should return an object containing the Employee criteria",() => {
            const obj = new makeUser.Employee();

            expect("name" in obj).toEqual(true);
        });
    });

    describe("Manager",() => {
        it("Should return an object containing the Manager criteria",() => {
            const obj = new makeUser.Manager();

            expect("officeNumber" in obj).toEqual(true);
        });
    });

    describe("Engineer",() => {
        it("Should return an object containing the Engineer criteria",() => {
            const obj = new makeUser.Engineer();

            expect("github" in obj).toEqual(true);
        });
    });

    describe("Intern",() => {
        it("Should return an object containing the Intern criteria",() => {
            const obj = new makeUser.Intern();

            expect("school" in obj).toEqual(true);
        });
    });
});