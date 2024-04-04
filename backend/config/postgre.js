const { Sequelize } = require("sequelize");




const connection=async () => {
  const sequelize = new Sequelize("todoNext", "postgres", "navdishjaggi", {
    host: "localhost",
    dialect: "postgres",
  }); 
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connection has been established successfully.");
    global.database = sequelize;
    console.log("database", global.database);
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
// connection()

exports.connection = connection
