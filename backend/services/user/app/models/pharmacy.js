const {DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Pharmacy = sequelize.define('pharmacy', {
    license_number: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(100)
    },
    phone_number: {
        type: DataTypes.STRING(15)
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
});

module.exports = Pharmacy;
