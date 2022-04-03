const generatePage = (team) => {
  const generateManager = (manager) => {
    return `        
    <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="fs-2">${manager.getName()}</h2>
                <h3 class="fs-3">
                  <i class="fas fa-mug-hot mr-2"></i> Manager
                </h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="fs-2">${engineer.getName()}</h2>
                <h3 class="fs-3">
                  <i class="fas fa-glasses mr-2"></i> Engineer
                </h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                    >${engineer.getGithub()}</a
                  >
                </li>
            </ul>
        </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    return `        
    <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="fs-2">${intern.getName()}</h2>
                <h3 class="fs-3">
                  <i class="fas fa-user-graduate mr-2"></i> Intern
                </h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                </li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <div class="row">
      <header class="col-12 bg-danger text-white text-center p-4 fs-1">
        My Team
      </header>
      <main class="col-12 d-flex flex-column">
        <div class="m-5 row justify-content-center">
            ${generatePage(team)}
        </div>
      </main>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `;
};
