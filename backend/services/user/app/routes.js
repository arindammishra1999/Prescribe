const loginController = require('./controllers/loginController.js');
const registerController = require('./controllers/registerController.js');
const {
    getAllPatientsController,
    getPatientByIdController,
    updateDefaultPharmacyController
} = require('./controllers/patientController.js');
const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/patients', authorizeMiddleware(['prescriber']), getAllPatientsController);
router.get('/patient/:id', authorizeMiddleware(['prescriber']), getPatientByIdController);
router.put('/patient/:id/update-default-pharmacy', authorizeMiddleware(['patient']), updateDefaultPharmacyController);

module.exports = router;
