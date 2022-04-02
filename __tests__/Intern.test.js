const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
  const intern = new Intern(
    "Sally",
    "4",
    "Sally@gmail.com",
    "University of Oregon"
  );

  expect(intern.name).toBe("Sally");
  expect(intern.id).toBe("4");
  expect(intern.email).toBe("Sally@gmail.com");
  expect(intern.school).toBe("University of Oregon");
});

test("gets intern's school", () => {
  const intern = new Intern(
    "Sally",
    "4",
    "Sally@gmail.com",
    "University of Oregon"
  );

  expect(intern.getSchool()).toEqual(
    expect.stringContaining("University of Oregon")
  );
});

test("gets intern's role", () => {
  const intern = new Intern(
    "Sally",
    "4",
    "Sally@gmail.com",
    "University of Oregon"
  );

  expect(intern.getRole()).toEqual("Intern");
});
