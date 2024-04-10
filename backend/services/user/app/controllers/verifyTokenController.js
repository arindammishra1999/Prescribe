const jwt = require('jsonwebtoken');

const verifyTokenController = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.PUBLIC_KEY, {
            algorithms: ['RS256'],
            issuer: 'user-service',
            audience: 'prescribe-app'
        }, (error, decoded) => {
            if (error) {
                console.error(error);
                return res.status(401).send(error);
            }
            console.log('Token decoded: ', decoded);
            return res.status(200);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = verifyTokenController;
