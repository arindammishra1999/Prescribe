const loginController = require('./controllers/loginController.js');
const registerController = require('./controllers/registerController.js');
const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.post('/login', loginController);
router.post('/register', registerController);

module.exports = router;
