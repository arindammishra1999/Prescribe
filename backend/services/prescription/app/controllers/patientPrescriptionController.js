const {
    getAllPrescriptionsByPatientIdService,
    getPrescriptionsByStatusAndPatientIdService
} = require('../services/patientPrescriptionService');

const getAllPrescriptionsByPatientIdController = async (req, res) => {
    try {
        const {id} = req.params;

        const {prescriptions, error} = await getAllPrescriptionsByPatientIdService(id);

        if (error) {
            return res.status(500).send({error: error});
        }

        return res.status(200).send({prescriptions: prescriptions});
    } catch (error) {
        console.error(error);
    }
}

const getPrescriptionsByStatusAndPatientIdController = async (req, res) => {
    try {
        const {id, status} = req.params;

        const {prescriptions, error} = await getPrescriptionsByStatusAndPatientIdService(id, status.toLowerCase());

        if (error) {
            return res.status(500).send({error: error});
        }

        return res.status(200).send({prescriptions: prescriptions});
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllPrescriptionsByPatientIdController,
    getPrescriptionsByStatusAndPatientIdController
};
