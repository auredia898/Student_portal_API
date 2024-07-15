const express = require('express')
const AdmissionController = require('../controllers/admissionController');

const upload = require('../middlewares/upload')

const AdmissionRouter = express.Router()

AdmissionRouter.post('/', upload.fields([
    { name: 'card', maxCount: 1 },
    { name: 'motivationLetter', maxCount: 1 }]),  AdmissionController.createAdmission);
AdmissionRouter.get('/', AdmissionController.getAllAdmissions);
AdmissionRouter.get('/:id', AdmissionController.getAdmissionById);
AdmissionRouter.put('/:id',upload.fields([
    { name: 'card', maxCount: 1 },
    { name: 'motivationLetter', maxCount: 1 }]), AdmissionController.updateAdmission);
AdmissionRouter.delete('/:id', AdmissionController.deleteAdmission);
AdmissionRouter.put('/:id/validate', AdmissionController.validateAdmission);

module.exports = AdmissionRouter; 