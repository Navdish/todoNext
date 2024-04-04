const {DataTypes} = require('sequelize');
// const lib = require('../../lib');



const database = global.database;
const User = database.define('User', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

module.exports = User;