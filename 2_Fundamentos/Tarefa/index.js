const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome?",
    },
    {
      name: "idade",
      message: "Qual a sua idade? ",
    },
  ])
  .then((answers) => {
    console.log(
      chalk.bgYellow.black(
        `Meu nome é ${answers.nome} e tenho ${answers.idade} anos.`
      )
    );
  })
  .catch((err) => {
    console.log(chalk.red(err));
  });
