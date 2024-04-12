const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService.js');

const loginController = async (req, res) => {
    try {
        const {user, role} = req.body;

        if (!user.id || !user.password || !role) {
            return res.status(400).send({error: 'Missing required fields'});
        }

        const {user: authUser, error} = await loginService(user.id, user.password, role);

        if (error) {
            return res.status(401).send({error: error});
        }

        jwt.sign({id: user.id, role}, process.env.PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: '1h',
            issuer: 'user-service',
            audience: 'prescribe-app'
        }, (error, token) => {
            if (error) {
                console.error(error);
                return res.status(500).send({error: error});
            }
            console.log(`Token: ${token} created for ${user.id}`);
            return res.status(200).send({token, user: authUser, role: role.toLocaleString()});
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({error: 'Internal server error'});
    }
}

module.exports = loginController;
