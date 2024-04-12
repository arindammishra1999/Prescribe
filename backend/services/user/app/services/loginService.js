const Patient = require('../models/patient.js');
const Prescriber = require('../models/prescriber.js');
const Pharmacy = require('../models/pharmacy.js');
const argon = require('argon2');

async function authenticate(id, password, role, model) {
    const user = await model.findByPk(id);

    if (!user) {
        console.log(`${role}: ${id} not found`);
        return {user: null, error: 'User Id not found'};
    }

    const {password: hashedPassword, ...rest} = user.dataValues;

    if (await argon.verify(hashedPassword, password)) {
        console.log(`${role}: ${id} password verified`);
        return {user: rest, error: null};
    }

    console.log(`${role}: ${id} password not verified`);
    return {user: null, error: 'Incorrect password'};
}

async function loginService(id, password, role) {
    if (role.toLowerCase() === 'patient') {
        return await authenticate(id, password, role, Patient);
    } else if (role.toLowerCase() === 'prescriber') {
        return await authenticate(id, password, role, Prescriber);
    } else if (role.toLowerCase() === 'pharmacy') {
        return await authenticate(id, password, role, Pharmacy);
    }
    console.log(`Role: ${role} not recognized`);
    return {user: null, error: 'Incorrect role'};
}

module.exports = loginService;
