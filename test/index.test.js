// Test the index.js file

const index = require("../index");

describe("index", () => {
    describe("writeToFile", () => {
        it("Should write the content to a file", () => {
            expect(writeToFile()).toBe("File Genarated")
        });
    });
    describe("menu", () => {
        it("Should return the questions for the proper selection", () => {
            expect(index.menu()).toBe("add an engineer")
        });
    });
});

describe("MakeUser", () => {
    describe("Manager", () => {
        it("Should retern an obj of a manager's credentials", () => {
            expect(manager()).toBe({});
        });
    });
    describe("Engineer", () => {
        it("Should retern an obj of a engineer's credentials", () => {
            expect(engineer()).toBe({});    
        });
    });
    describe("Intern", () => {
        it("Should refer an obj of a intern's credentials", () => {
            expect(intern()).toBe({});      
        });
    });
});
