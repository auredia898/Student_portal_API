const DegreeService = require('../services/degreeService');


class DegreeController{

    async createDegree (req, res){
        try{
            const {name, nbYear} = req.body
            const degreeData = { name, nbYear }
            const newDegree = await DegreeService.createDegree(degreeData)
            res.status(201).json(newDegree)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateDegree(req, res){
        try{
            const { id } = req.params;
            const {name, nbYear} = req.body
            const degreeData = { name, nbYear }
            const updateDegree = await DegreeService.updateDegree(id, degreeData);
            res.status(200).json(updateDegree);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteDegree(req, res){
        try{
            const { id } = req.params;
            const deleteDegree = await DegreeService.deleteDegree(id)
            res.status(200).send({message: 'Degree deleted successfully!', deleteDegree});
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllDegrees(req, res){
        try{
            const Degrees = await DegreeService.getAllDegrees();
            res.status(200).json(Degrees);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getDegreeById(req, res){
        try{
            const { id } = req.params;
            const degree = await DegreeService.getDegreeById(id);
            res.status(200).json(degree);
        }catch(error){
            res.staus(404).json({ message: error.message})
        }
    }
}

module.exports = new DegreeController();