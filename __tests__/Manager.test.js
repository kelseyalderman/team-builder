const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("Ben", "2", "ben@gmail.com", "1");

  expect(manager.name).toBe("Ben");
  expect(manager.id).toBe("2");
  expect(manager.email).toBe("ben@gmail.com");
  expect(manager.officeNumber).toBe("1");
});

test("gets manager's office number", () => {
  const manager = new Manager("Ben", "2", "ben@gmail.com", "1");

  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("1"));
});

test("gets manager's role", () => {
  const manager = new Manager("Ben", "2", "ben@gmail.com", "1");

  expect(manager.getRole()).toEqual("Manager");
});
