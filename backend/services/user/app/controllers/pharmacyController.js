const {getAllPharmaciesService, getPharmacyByIdService} = require('../services/pharmacyService.js');

const getAllPharmaciesController = async (req, res) => {
    try {
        const {pharmacies, error} = await getAllPharmaciesService();

        if (error) {
            return res.status(404).send({error: error});
        }

        return res.status(200).send({pharmacies: pharmacies});
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

const getPharmacyByIdController = async (req, res) => {
    try {
        const {id} = req.params;
        const {pharmacy, error} = await getPharmacyByIdService(id);

        if (error) {
            return res.status(404).send({error: error});
        }
        console.log(pharmacy);
        return res.status(200).send(pharmacy);
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

module.exports = {
    getAllPharmaciesController,
    getPharmacyByIdController
};

