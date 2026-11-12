const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Suco = db.define('suco',{
    codSuco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sabor: {
        type: DataTypes.ENUM('Laranja','Morango','Uva'),
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codUsuario',
            model: 'usuarios'
        }
    }
},{
    timestamps: false,
    tableName: 'sucos'
})

module.exports = Suco