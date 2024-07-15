const AdmissionService = require('../services/admissionService');


class AdmissionController{

    async createAdmission (req, res){
        try{
            const {lastGraduation, status, lastAverage, studentId, degreeId, universityId, programId} = req.body
            const card = req.files.card ? req.files.card[0].path : '';
            const motivationLetter = req.files.motivationLetter[0] ? req.files.card[0].path : '';
            const admissionData = {
                lastGraduation,
                status,
                lastAverage,
                card,
                motivationLetter,
                studentId,
                degreeId,
                universityId,
                programId
            }
            const newAdmission = await AdmissionService.createAdmission(admissionData)
            res.status(201).json(newAdmission)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateAdmission(req, res) {
        try {
            const { id } = req.params;
            const { lastGraduation, status, lastAverage, studentId, degreeId, universityId, programId } = req.body;
            
            const currentAdmission = await AdmissionService.getAdmissionById(id);

            const admissionData = {
                lastGraduation: lastGraduation || currentAdmission.lastGraduation,
                status: status || currentAdmission.status,
                lastAverage: lastAverage || currentAdmission.lastAverage,
                card: req.files && req.files.card ? req.files.card[0].path : currentAdmission.card,
                motivationLetter: req.files && req.files.motivationLetter ? req.files.motivationLetter[0].path : currentAdmission.motivationLetter,
                studentId: studentId || currentAdmission.studentId,
                degreeId: degreeId || currentAdmission.degreeId,
                universityId: universityId || currentAdmission.universityId,
                programId: programId || currentAdmission.programId
            };

            const updatedAdmission = await AdmissionService.updateAdmission(id, admissionData);
            res.status(200).json(updatedAdmission);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deleteAdmission(req, res){
        try{
            const { id } = req.params;
            const deleteAdmission = await AdmissionService.deleteAdmission(id)
            res.status(200).send({message: 'Admission deleted successfully!', deleteAdmission})

        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllAdmissions(req, res){
        try{
            const admissions = await AdmissionService.getAllAdmissions();
            res.status(200).json(admissions);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getAdmissionById(req, res){
        try{
            const { id } = req.params;
            const admission = await AdmissionService.getAdmissionById(id);
            res.status(200).json(admission);
        }catch(error){
            res.staus(404).json({ message: error.message})
        }
    }

    async validateAdmission(req, res) {
        try {
            const { id } = req.params;
            const admission = await AdmissionService.getAdmissionById(id);
            if (!admission) {
                return res.status(404).json({ message: 'Admission not found!' });
            }
            admission.status = true;
            const updatedAdmission = await admission.save();
            res.status(200).send({message: 'Admission updated successfully!', updatedAdmission});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new AdmissionController();