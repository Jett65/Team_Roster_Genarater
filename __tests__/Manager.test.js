const { Manager } = require("../lib/makeUser");

test("Creates an manager object",() => {
    const manager = new Manager("Jett",1,"email@email.com",3);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});