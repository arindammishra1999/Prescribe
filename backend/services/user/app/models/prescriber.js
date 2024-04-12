const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const Prescriber = sequelize.define('prescriber',{
    practitioner_id: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
});

module.exports = Prescriber;