const express = require('express')
const AdmissionController = require('../controllers/admissionController');
const { verifyToken, verifyRole, verifyAdmissionOwnership} = require('../middlewares/authMiddlware');

const upload = require('../middlewares/upload')

const AdmissionRouter = express.Router()

AdmissionRouter.use(verifyToken);
AdmissionRouter.post('/', upload.fields([
    { name: 'card', maxCount: 1 },
    { name: 'motivationLetter', maxCount: 1 }]),  AdmissionController.createAdmission);
AdmissionRouter.put('/:id',upload.fields([
    { name: 'card', maxCount: 1 },
    { name: 'motivationLetter', maxCount: 1 }]), verifyAdmissionOwnership, AdmissionController.updateAdmission);


AdmissionRouter.use(verifyRole( ['ROLE_ADMIN'] ));

AdmissionRouter.get('/', AdmissionController.getAllAdmissions);
AdmissionRouter.get('/:id', AdmissionController.getAdmissionById);
AdmissionRouter.delete('/:id', AdmissionController.deleteAdmission);
AdmissionRouter.put('/:id/validate', AdmissionController.validateAdmission);

module.exports = AdmissionRouter; 