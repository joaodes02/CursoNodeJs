const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conecatamos com o sequelize!!");
} catch (err) {
  console.log("Não foi possivel conectar", err);
}

module.exports = sequelize;
