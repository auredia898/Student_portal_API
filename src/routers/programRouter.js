const express = require('express')
const ProgramController = require('../controllers/programController');

const ProgramRouter = express.Router()

ProgramRouter.post('/', ProgramController.createProgram);
ProgramRouter.get('/', ProgramController.getAllPrograms);
ProgramRouter.get('/:id', ProgramController.getProgramById);
ProgramRouter.get('/by-university/:universityId', ProgramController.getProgramByUniversity);
ProgramRouter.put('/:id', ProgramController.updateProgram);
ProgramRouter.delete('/:id', ProgramController.deleteProgram);
ProgramRouter.post('/add-degree', ProgramController.addDegreeToProgram);


module.exports = ProgramRouter; 