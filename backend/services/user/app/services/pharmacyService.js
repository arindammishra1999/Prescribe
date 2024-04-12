const Pharmacy = require('../models/pharmacy');

async function getAllPharmaciesService() {
    const pharmacies = await Pharmacy.findAll({
        attributes: {exclude: ['password']}
    });

    if (!pharmacies) {
        return {pharmacies: null, error: 'No pharmacies found'};
    }

    return {pharmacies: pharmacies, error: null};
}

async function getPharmacyByIdService(id) {
    const pharmacy = await Pharmacy.findByPk(id, {
        attributes: {exclude: ['password']}
    });

    if (!pharmacy) {
        return {pharmacy: null, error: 'Pharmacy not found'};
    }

    return {pharmacy: pharmacy, error: null};
}

module.exports = {
    getAllPharmaciesService,
    getPharmacyByIdService
};
