const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Sam", "1234", "sam@gmail.com");

  expect(employee.name).toBe("Sam");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("sam@gmail.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Sam", "1234", "sam@gmail.com");

  expect(employee.getName()).toEqual(expect.stringContaining("Sam"));
});

test("gets employee's id", () => {
  const employee = new Employee("Sam", "1234", "sam@gmail.com");

  expect(employee.getId()).toEqual(expect.stringContaining("1234"));
});

test("gets employee's email", () => {
  const employee = new Employee("Sam", "1234", "sam@gmail.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining("sam@gmail.com"));
});

test("gets employee's role", () => {
  const employee = new Employee("Sam", "1234", "sam@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
