const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService.js');

const loginController = async (req, res) => {
    try {
        const {id, password, type} = req.body;

        if (!id || !type || !password) {
            return res.status(400).send('Missing required fields');
        }

        const user = await loginService(id, password, type);

        if (!user) {
            return res.status(401).send('Unauthorized');
        }

        jwt.sign({id, type}, process.env.PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: '1h',
            issuer: 'user-service',
            audience: 'prescribe-app'
        }, (error, token) => {
            if (error) {
                console.error(error);
                return res.status(500).send(error);
            }
            console.log(`Token: ${token} created for ${id}`);
            return res.status(200).send({token, user});
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = loginController;
