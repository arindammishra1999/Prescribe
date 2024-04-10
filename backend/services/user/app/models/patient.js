const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const Patient = sequelize.define('patient', {
    health_card_number: {
        type: DataTypes.CHAR(10),
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
    gender: {
        type: DataTypes.CHAR(1)
    },
    birthdate: {
        type: DataTypes.DATE
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    qr_code_hash: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
    }
});

module.exports = Patient;
