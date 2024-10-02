const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual sua linguagem preferida? ", (language) => {
  if (language === "python") {
    console.log("Meu deus! Isso nem é linguagem.");
  } else {
    console.log(`Minha linguagem preferida é ${language}`);
  }
});
