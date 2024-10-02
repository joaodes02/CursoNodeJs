const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabéns, você foi aprovado!"));
} else {
  console.log(chalk.red("Você precisa fazer a recuperação!"));
}
