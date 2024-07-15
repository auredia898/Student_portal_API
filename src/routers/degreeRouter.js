const express = require('express')
const DegreeController = require('../controllers/degreeController');
const { verifyToken, verifyRole} = require('../middlewares/authMiddlware');

const DegreeRouter = express.Router()

DegreeRouter.use(verifyToken);
DegreeRouter.get('/', DegreeController.getAllDegrees);
DegreeRouter.get('/:id', DegreeController.getDegreeById);


DegreeRouter.use(verifyRole( ['ROLE_ADMIN'] ));
DegreeRouter.post('/', DegreeController.createDegree);
DegreeRouter.put('/:id', DegreeController.updateDegree);
DegreeRouter.delete('/:id', DegreeController.deleteDegree);

module.exports = DegreeRouter; 