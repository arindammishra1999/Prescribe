const Patient = require('../models/Patient.js');

async function getAllPatientsService() {
    const patients = await Patient.findAll({
        attributes: {exclude: ['password']}
    });

    if (!patients) {
        return {patients: null, error: 'No patients found'};
    }

    return {patients: patients, error: null};
}

async function getPatientByIdService(id) {
    const patient = Patient.findByPk(id, {
        attributes: {exclude: ['password']}
    });

    if (!patient) {
        return {patient: null, error: 'Patient not found'};
    }

    return {patient: patient, error: null};
}

async function updateDefaultPharmacyService(id, pharmacy_id) {
    const patient = await Patient.findByPk(id, {
        attributes: {exclude: ['password']}
    });

    if (!patient) {
        return {patient: null, error: 'Patient not found'};
    }

    patient.default_pharmacy = pharmacy_id;

    try {
        await patient.save();
    } catch (error) {
        return {patient: null, error: error};
    }

    return {patient: patient, error: null};
}

module.exports = {
    getAllPatientsService,
    getPatientByIdService,
    updateDefaultPharmacyService
};
