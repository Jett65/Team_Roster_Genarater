const { Intern } = require("../makeUser");

test("Creates an intern object",() => {
    const intern = new Intern("Jett",1,"email@email.com","U of U");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});