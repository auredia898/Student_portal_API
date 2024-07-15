const { Degree } = require('../models/index')

class DegreeService{

    async createDegree(degreeData){
        return await Degree.create(degreeData)
    }

    async updateDegree(id, degreeData){
        const degree = await Degree.findOne({ where: { id } })
        if(!degree){
            throw new Error ('Degree not found!')        
        }
        
        await degree.update(degreeData)
        return degree;
    }

    async deleteDegree(id){
        const degree = await Degree.findOne({ where: { id } })
        if(!degree){
            throw new Error ('Degree not found!')        
        }    
        await degree.destroy();
        return degree;
    }

    async getAllDegrees(){
        return await Degree.findAll();
    }

    async getDegreeById(id){
        const degree = await Degree.findOne({ where: {id} });
        if (!degree){
            throw new Error ('Degree not found!') 
        }
        return degree;
    }
}

module.exports = new DegreeService()