// models/cliente.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cedula: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(15)
    },
    correo: {
        type: DataTypes.STRING(100)
    },
    edad: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    peso: {
        type: DataTypes.DECIMAL(5,2)
    },
    estatura: {
        type: DataTypes.DECIMAL(5,2)
    },
    genero: {
        type: DataTypes.STRING(10)
    },
    idsucursal: {
        type: DataTypes.INTEGER,        
        references: {
            model: 'sucursal',
            key: 'id'
        }
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Cliente;
