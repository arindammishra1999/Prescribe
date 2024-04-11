const jwt = require('jsonwebtoken');

const authorizeMiddleware = (roles) => (req, res, next) => {
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
            if (roles.includes(decoded.role.toLowerCase())) {
                next();
            } else {
                return res.status(403).send('Forbidden');
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = authorizeMiddleware;
