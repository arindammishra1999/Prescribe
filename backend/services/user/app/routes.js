const loginController = require('./controllers/loginController.js');
const registerController = require('./controllers/registerController.js');
const {
    getAllPatientsController,
    getPatientByIdController,
    updateDefaultPharmacyController,
    getPatientByQRController
} = require('./controllers/patientController.js');
const {
    getAllPharmaciesController,
    getPharmacyByIdController
} = require('./controllers/pharmacyController.js');
const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/patients', authorizeMiddleware(['prescriber']), getAllPatientsController);
router.get('/patient/:id', authorizeMiddleware(['prescriber']), getPatientByIdController);
router.put('/patient/:id/update-default-pharmacy', authorizeMiddleware(['patient']), updateDefaultPharmacyController);
router.get('/patient-qr/', authorizeMiddleware(['prescriber']), getPatientByQRController);
router.get('/pharmacies', authorizeMiddleware(['patient', 'prescriber', 'pharmacy']), getAllPharmaciesController);
router.get('/pharmacy/:id', authorizeMiddleware(['patient', 'prescriber', 'pharmacy']), getPharmacyByIdController);

module.exports = router;
