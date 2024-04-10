const registerService = require('../services/registerService.js');

async function registerController(req, res) {
    try {
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = registerController;
