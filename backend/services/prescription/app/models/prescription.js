const {DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Prescription = sequelize.define('prescription', {
    prescription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patient_health_card_number: {
        type: DataTypes.CHAR(10),
        allowNull: false,
    },
    prescriber_practitioner_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    pharmacy_license_number: {
        type: DataTypes.STRING(20),
    },
    drug_identification_number: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    drug_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    refills: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.STRING(50)
    },
    date_issued: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time_to_complete: {
        type: DataTypes.INTEGER
    },
    qr_code_hash: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
    },
    dispensing_instructions: {
        type: DataTypes.TEXT
    },
    directions_of_use: {
        type: DataTypes.TEXT
    },
    medication_details: {
        type: DataTypes.TEXT
    }
});

module.exports = Prescription;
