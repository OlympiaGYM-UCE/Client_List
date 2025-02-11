const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://usuario:password@localhost:5432/mi_db');
module.exports = sequelize;