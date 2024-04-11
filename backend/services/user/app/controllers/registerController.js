const registerService = require('../services/registerService.js');

async function registerController(req, res) {
    try {
        const {user, role} = req.body;

        if (!user || !role) {
            return res.status(400).send({error: 'Missing required fields'});
        }

        const {user: registeredUser, error} = await registerService(user, role);

        if (error) {
            return res.status(500).send({error: error});
        }

        const {password, ...rest} = registeredUser.dataValues;

        return res.status(201).send(rest);
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

module.exports = registerController;
