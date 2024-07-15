const ProgramService = require('../services/programService');


class ProgramController{

    async createProgram (req, res){
        try{
            const {name, universityId, degreeId } = req.body
            const programData = { name, universityId , degreeId }
            const newProgram = await ProgramService.createProgram(programData)
            res.status(201).json(newProgram)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateProgram(req, res){
        try{
            const { id } = req.params;
            const {name,  universityId, degreeId } = req.body
            const programData = { name,  universityId, degreeId  }
            const updateProgram = await ProgramService.updateProgram(id, programData);
            res.status(200).json(updateProgram);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteProgram(req, res){
        try{
            const { id } = req.params;
            const deleteProgram = await ProgramService.deleteProgram(id)
            res.status(200).send({message: 'Program deleted successfully!', deleteProgram})
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllPrograms(req, res){
        try{
            const programs = await ProgramService.getAllPrograms();
            res.status(200).json(programs);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getProgramById(req, res){
        try{
            const { id } = req.params;
            const program = await ProgramService.getProgramById(id);
            res.status(200).json(program);
        }catch(error){
            res.staus(404).json({ message: error.message})
        }
    }

    async getProgramByUniversity(req, res){
        try{
            const { universityId } = req.params;
            const program = await ProgramService.getProgramByUniversity(universityId);
            res.status(200).json(program);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async addDegreeToProgram(req, res){
        try{
            const { programId, degreeId } = req.body;
            const program = await ProgramService.addDegreeToProgram(programId, degreeId);
            res.status(200).json(program); 
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new ProgramController();