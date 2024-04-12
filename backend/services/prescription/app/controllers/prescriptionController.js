const {createPrescriptionService, updatePrescriptionService} = require('../services/prescriptionService.js');

const createPrescriptionController = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({error: 'Request body is missing'});
        }

        const {prescription, error} = await createPrescriptionService(req.body);

        if (error) {
            return res.status(500).send({error: error});
        }

        return res.status(201).send(prescription);
    } catch (error) {
        console.error(error);
    }
};

const updatePrescriptionController = async (req, res) => {
    try {
        const {id} = req.params;
        const prescriptionDetails = req.body;

        if (!req.body) {
            return res.status(400).send({error: 'Request body is missing'});
        }

        const {prescription, error} = await updatePrescriptionService(id, prescriptionDetails);

        if (error) {
            return res.status(500).send({error: error});
        }

        res.status(200).send(prescription);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createPrescriptionController,
    updatePrescriptionController
};
