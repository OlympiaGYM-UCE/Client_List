const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cedula: { type: DataTypes.STRING, allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    edad: { type: DataTypes.INTEGER, allowNull: false },
    peso: { type: DataTypes.FLOAT, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    idsucursal: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });
module.exports = Cliente;