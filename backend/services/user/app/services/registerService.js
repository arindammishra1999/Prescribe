const Patient = require('../models/patient.js');
const Prescriber = require('../models/prescriber.js');
const Pharmacy = require('../models/pharmacy.js');
const argon = require('argon2');

async function register(user, role, model) {
    const {password, ...rest} = user;

    if (role.toLowerCase() === 'patient') {
        user.qr_code_hash = await argon.hash(JSON.stringify(rest));
    }

    user.password = await argon.hash(password);

    console.log(`Attempting to register ${user.id} as ${model.name}`);

    const registeredUser = await model.create(user);

    return {user: registeredUser, error: null};
}

async function registerService(user, role) {
    if (role.toLowerCase() === 'patient') {
        return await register(user, role, Patient);
    } else if (role.toLowerCase() === 'prescriber') {
        return await register(user, role, Prescriber);
    } else if (role.toLowerCase() === 'pharmacy') {
        return await register(user, role, Pharmacy);
    }
    console.log(`Role: ${role} not recognized`);
    return {user: null, error: 'Incorrect role'};
}

module.exports = registerService;
