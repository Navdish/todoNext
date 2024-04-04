const express = require('express');
const cors = require('cors');
const { Sequelize } = require("sequelize");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// require('./config/mongoDB');
// require('./config/postgre');

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

const db =  connection().then(console.log("khdja vai"));

app.use("/", require("./routes"));

app.listen(process.env.PORT, function () {
    console.log(`server running at ${process.env.PORT}`);
})