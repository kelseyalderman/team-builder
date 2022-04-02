const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer("Rose", "3", "Rose@gmail.com", "rosegit");

  expect(engineer.name).toBe("Rose");
  expect(engineer.id).toBe("3");
  expect(engineer.email).toBe("Rose@gmail.com");
  expect(engineer.github).toBe("rosegit");
});

test("gets engineer's github username", () => {
  const engineer = new Engineer("Rose", "3", "Rose@gmail.com", "rosegit");

  expect(engineer.getGithub()).toEqual(expect.stringContaining("rosegit"));
});

test("gets engineer's role", () => {
  const engineer = new Engineer("Rose", "3", "Rose@gmail.com", "rosegit");

  expect(engineer.getRole()).toEqual("Engineer");
});
