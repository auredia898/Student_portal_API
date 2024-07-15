const express = require('express')
const DegreeController = require('../controllers/degreeController');

const DegreeRouter = express.Router()

DegreeRouter.post('/', DegreeController.createDegree);
DegreeRouter.get('/', DegreeController.getAllDegrees);
DegreeRouter.get('/:id', DegreeController.getDegreeById);
DegreeRouter.put('/:id', DegreeController.updateDegree);
DegreeRouter.delete('/:id', DegreeController.deleteDegree);

module.exports = DegreeRouter; 