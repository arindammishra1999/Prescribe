const {
    getAllPatientsService,
    getPatientByIdService,
    updateDefaultPharmacyService
} = require('../services/patientService.js');

const getAllPatientsController = async (req, res) => {
    try {
        const {patients, error} = await getAllPatientsService();

        if (error) {
            return res.status(404).send({error: error});
        }

        return res.status(200).send({patients: patients});
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

const getPatientByIdController = async (req, res) => {
    try {
        const {id} = req.params;
        const {patient, error} = await getPatientByIdService(id);

        if (error) {
            return res.status(404).send({error: error});
        }

        return res.status(200).send(patient);
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

const updateDefaultPharmacyController = async (req, res) => {
    try {
        const {id} = req.params;
        const {pharmacy_id} = req.body;

        const {patient, error} = await updateDefaultPharmacyService(id, pharmacy_id);

        if (error) {
            return res.status(404).send({error: error});
        }

        return res.status(200).send(patient);
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }

}

module.exports = {
    getAllPatientsController,
    getPatientByIdController,
    updateDefaultPharmacyController
};
