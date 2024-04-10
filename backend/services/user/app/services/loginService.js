const Patient = require('../models/Patient.js');
const Prescriber = require('../models/Prescriber.js');
const Pharmacy = require('../models/Pharmacy.js');
const argon = require('argon2');

async function authenticate(id, password, type, model) {
    try {
        const user = await model.findByPk(id);

        if (!user) {
            console.log(`${type}: ${id} not found`);
            return null;
        }

        const {password: hashedPassword, ...rest} = user.dataValues;

        if (await argon.verify(hashedPassword, password)) {
            console.log(`${type}: ${id} password verified`);
            return rest;
        }

        console.log(`${type}: ${id} password not verified`);
        return null;
    } catch (error) {
        console.error(error);
    }

}

async function loginService(id, password, type) {
    try {
        if (type.toLowerCase() === 'patient') {
            return await authenticate(id, password, type, Patient);
        } else if (type.toLowerCase() === 'prescriber') {
            return await authenticate(id, password, type, Prescriber);
        } else if (type.toLowerCase() === 'pharmacy') {
            return await authenticate(id, password, type, Pharmacy);
        }
        console.log(`Type: ${type} not recognized`);
        return null
    } catch (error) {
        console.error(error);
    }
}

module.exports = loginService;
