const Prescription = require('../models/prescription.js');

async function getAllPrescriptionsByPatientIdService(patient_id) {
    const prescriptions = await Prescription.findAll({
        where: {
            patient_health_card_number: patient_id
        }
    });

    if (!prescriptions) {
        return {prescriptions: null, error: 'No prescriptions found'};
    }

    return {prescriptions: prescriptions, error: null};
}

async function getPrescriptionsByStatusAndPatientIdService(patient_id, status) {
    const prescriptions = await Prescription.findAll({
        where: {
            patient_health_card_number: patient_id,
            status: status
        }
    });

    if (!prescriptions) {
        return {prescriptions: null, error: 'No prescriptions found'};
    }

    return {prescriptions: prescriptions, error: null};
}

module.exports = {
    getAllPrescriptionsByPatientIdService,
    getPrescriptionsByStatusAndPatientIdService
}