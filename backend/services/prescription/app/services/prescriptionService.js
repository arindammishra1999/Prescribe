const Prescription = require('../models/prescription.js');
const argon = require('argon2');

async function createPrescriptionService(prescriptionDetails) {
    const qr_code_hash = await argon.hash(JSON.stringify(prescriptionDetails.patient_health_card_number));
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const date_issued = `${year}-${month}-${day}`;
    const status = prescriptionDetails.status.toLowerCase();

    prescriptionDetails.qr_code_hash = qr_code_hash;
    prescriptionDetails.date_issued = date_issued;
    prescriptionDetails.status = status;

    try {
        const prescription = await Prescription.create(prescriptionDetails);
        return {prescription: prescription, error: null};
    } catch (error) {
        console.error(error);
        return {prescription: null, error: error};
    }
}

async function updatePrescriptionService(id, prescriptionDetails) {
    const prescription = await Prescription.findByPk(id);

    if (!prescription) {
        return {prescription: null, error: 'Prescription not found'};
    }

    if (prescriptionDetails.status) {
        prescriptionDetails.status = prescriptionDetails.status.toLowerCase();
    }

    try {
        await prescription.update(prescriptionDetails);
        return {prescription: prescription, error: null};
    } catch (error) {
        console.error(error);
        return {prescription: null, error: error};
    }
}

module.exports = {
    createPrescriptionService,
    updatePrescriptionService
};
