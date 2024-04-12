const {
    createPrescriptionController,
    updatePrescriptionController,
} = require('./controllers/prescriptionController.js');
;const authorizeMiddleware = require('./middleware/authorizeMiddleware.js');
const router = require('express').Router();

router.post('/prescriptions', authorizeMiddleware(['prescriber']), createPrescriptionController);
router.put('/prescription/:id', authorizeMiddleware(['prescriber', 'pharmacy']), updatePrescriptionController);

module.exports = router;
