const loginController = require('./controllers/loginController.js');
const registerController = require('./controllers/registerController.js');
const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/protected', authorizeMiddleware(['patient']), (req, res) => {
    res.status(200).send('Protected route');
});

module.exports = router;
