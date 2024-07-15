const { Admission, Student, University, Degree, Program, User } = require('../models/index')

class AdmissionService{

    async createAdmission(admissionData){
        return await Admission.create(admissionData)
    }

    async updateAdmission(id, admissionData){
        const admission = await Admission.findOne({ where: { id } })
        if(!admission){
            throw new Error ('Admission not found!')        
        }
        await admission.update(admissionData)
        return admission;
    }

    async deleteAdmission(id){
        const admission = await Admission.findOne({ where: { id } })
        if(!admission){
            throw new Error ('Admission not found!')        
        }    
        await admission.destroy();
        return admission;
    }

    async getAllAdmissions(){
        return await Admission.findAll({
            include: [
                { model: Student, include: [User] },
                { model: University},
                { model: Program},
                { model: Degree}
            ],
        });
    }

    async getAdmissionById(id){
        const admission = await Admission.findOne({
            where: {id},
            include: [
                { model: Student, include: [User] },
                { model: University},
                { model: Program},
                { model: Degree}
            ],
        });
        if (!admission){
            throw new Error ('Admission not found!') 
        }
        return admission;
    }

    async validateAdmission(id) {
        const admission = await Admission.findOne({ where: { id } });
        if (!admission) {
            throw new Error('Admission not found!');
        }
        admission.status = true;
        return await admission.save();
    }
    
}

module.exports = new AdmissionService()