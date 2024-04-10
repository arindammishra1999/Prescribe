const loginController = require('./controllers/loginController.js');
const verifyTokenController = require('./controllers/verifyTokenController.js');
const registerController = require('./controllers/registerController.js');
const router = require('express').Router();

router.post('/login', loginController);
router.post('/verify-token', verifyTokenController);
router.post('/register', registerController);

module.exports = router;
