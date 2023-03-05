const { Employee } = require("../makeUser");

test("Creates an employee object",() => {
    const employee = new Employee("Jett",1,"email@email.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});