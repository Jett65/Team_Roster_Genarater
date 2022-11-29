// test the htmlGenerator file
const htmlgen = require("../htmlGenarater");

describe("htmlGenerator",() => {
    describe("manager",() => {
        it("Should return a string containing html for the manager",() => {
            const obj = {}

            expect(htmlgen.manager(obj)).toBe(typeof String);
        });

    });

    describe("engineer",() => {
        it("Should return a string containing html for the manager",() => {
            const obj = {}
 

            expect(htmlgen.engineer(obj)).toBe(typeof String);
        });

    });

    describe("intern",() => {
        it("Should return a string containing html for the manager",() => {
            const obj = {}
 

            expect(htmlgen.intren(obj)).toBe(typeof String);
        });

    });

    describe("writeToFile",() => {
        it("Should return a string stating file generated",() => {
            expect(htmlgen.writeToFile()).toBe("FileGenerated")
        });
    });

});