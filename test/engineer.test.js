const { Engineer } = require("../makeUser");

test("Creates an engineer object",() => {
    const engineer = new Engineer("Jett",1,"email@email.com","Jett65");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});