const express = require('express')
const ProgramController = require('../controllers/programController');
const { verifyToken, verifyRole} = require('../middlewares/authMiddlware');

const ProgramRouter = express.Router()

ProgramRouter.use(verifyToken);
ProgramRouter.get('/', ProgramController.getAllPrograms);
ProgramRouter.get('/:id', ProgramController.getProgramById);


ProgramRouter.use(verifyRole( ['ROLE_ADMIN'] ));
ProgramRouter.post('/', ProgramController.createProgram);
ProgramRouter.get('/by-university/:universityId', ProgramController.getProgramByUniversity);
ProgramRouter.put('/:id', ProgramController.updateProgram);
ProgramRouter.delete('/:id', ProgramController.deleteProgram);
ProgramRouter.post('/add-degree', ProgramController.addDegreeToProgram);


module.exports = ProgramRouter; 