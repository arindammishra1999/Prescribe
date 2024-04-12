const Prescription = require('../models/prescription.js');

async function getAllPrescriptionsByPharmacyIdService(pharmacy_id) {
    const prescriptions = await Prescription.findAll({
        where: {
            pharmacy_license_number: pharmacy_id
        }
    });

    if (!prescriptions) {
        return {prescriptions: null, error: 'No prescriptions found'};
    }

    return {prescriptions: prescriptions, error: null};
}

async function getPrescriptionsByStatusAndPharmacyIdService(pharmacy_id, status) {
    const prescriptions = await Prescription.findAll({
        where: {
            pharmacy_license_number: pharmacy_id,
            status: status
        }
    });

    if (!prescriptions) {
        return {prescriptions: null, error: 'No prescriptions found'};
    }

    return {prescriptions: prescriptions, error: null};
}

module.exports = {
    getAllPrescriptionsByPharmacyIdService,
    getPrescriptionsByStatusAndPharmacyIdService
};
