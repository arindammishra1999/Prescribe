const {
    getAllPrescriptionsByPharmacyIdService,
    getPrescriptionsByStatusAndPharmacyIdService
} = require('../services/pharmacyPrescriptionService');

const getAllPrescriptionsByPharmacyIdController = async (req, res) => {
    try {
        const {id} = req.params;

        const {prescriptions, error} = await getAllPrescriptionsByPharmacyIdService(id);

        if (error) {
            return res.status(500).send({error: error});
        }

        return res.status(200).send({prescriptions: prescriptions});
    } catch (error) {
        console.error(error);
    }
}

const getPrescriptionsByStatusAndPharmacyIdController = async (req, res) => {
    try {
        const {id, status} = req.params;

        const {prescriptions, error} = await getPrescriptionsByStatusAndPharmacyIdService(id, status.toLowerCase());

        if (error) {
            return res.status(500).send({error: error});
        }

        return res.status(200).send({prescriptions: prescriptions});
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllPrescriptionsByPharmacyIdController,
    getPrescriptionsByStatusAndPharmacyIdController
};
