const {
    getAllPrescriptionsByPatientIdController,
    getPrescriptionsByStatusAndPatientIdController,
} = require('./controllers/patientPrescriptionController');
const {
    getAllPrescriptionsByPharmacyIdController,
    getPrescriptionsByStatusAndPharmacyIdController,
} = require('./controllers/pharmacyPrescriptionController');
const {
    createPrescriptionController,
    updatePrescriptionController,
} = require('./controllers/prescriptionController.js');
const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.get('/patient/:id/prescriptions', authorizeMiddleware(['patient', 'prescriber', 'pharmacy']), getAllPrescriptionsByPatientIdController);
router.get('/patient/:id/prescription/:status', authorizeMiddleware(['patient', 'prescriber', 'pharmacy']), getPrescriptionsByStatusAndPatientIdController);
router.get('/pharmacy/:id/prescriptions', authorizeMiddleware(['pharmacy']), getAllPrescriptionsByPharmacyIdController);
router.get('/pharmacy/:id/prescription/:status', authorizeMiddleware(['pharmacy']), getPrescriptionsByStatusAndPharmacyIdController);
router.post('/prescriptions', authorizeMiddleware(['prescriber']), createPrescriptionController);
router.put('/prescription/:id', authorizeMiddleware(['prescriber', 'pharmacy']), updatePrescriptionController);

module.exports = router;
