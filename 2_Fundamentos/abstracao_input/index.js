const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      menssage: "Insira nota 1: ",
    },
    {
      name: "p2",
      menssagem: "Insira nota 2: ",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = parseFloat(answers.p1) + parseFloat(answers.p2) / 2;
    console.log(`Media = ${media}`);
  })
  .catch((err) => {
    console.log(err);
  });
