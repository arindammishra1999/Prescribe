const Patient = require('../models/Patient.js');
const Prescriber = require('../models/Prescriber.js');
const Pharmacy = require('../models/Pharmacy.js');
const argon = require('argon2');

async function authenticate(id, password, role, model) {
    try {
        const user = await model.findByPk(id);

        if (!user) {
            console.log(`${role}: ${id} not found`);
            return null;
        }

        const {password: hashedPassword, ...rest} = user.dataValues;

        if (await argon.verify(hashedPassword, password)) {
            console.log(`${role}: ${id} password verified`);
            return rest;
        }

        console.log(`${role}: ${id} password not verified`);
        return null;
    } catch (error) {
        console.error(error);
    }

}

async function loginService(id, password, role) {
    try {
        if (role.toLowerCase() === 'patient') {
            return await authenticate(id, password, role, Patient);
        } else if (role.toLowerCase() === 'prescriber') {
            return await authenticate(id, password, role, Prescriber);
        } else if (role.toLowerCase() === 'pharmacy') {
            return await authenticate(id, password, role, Pharmacy);
        }
        console.log(`Type: ${role} not recognized`);
        return null
    } catch (error) {
        console.error(error);
    }
}

module.exports = loginService;
