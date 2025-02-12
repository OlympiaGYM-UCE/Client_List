// models/index.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('olympia', 'chrisc', 'root', {
    host: '3.211.181.243',
    dialect: 'postgres',
    logging: false, 
});

module.exports = sequelize;
