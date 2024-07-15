const express = require('express')
const UniversityController = require('../controllers/universityController');

const upload = require('../middlewares/upload')

const UniversityRouter = express.Router()


UniversityRouter.get('/', UniversityController.getAllUniversities);
UniversityRouter.get('/:id', UniversityController.getUniversityById);
UniversityRouter.put('/:userId',upload.single('logo'), UniversityController.updateUniversity);
UniversityRouter.delete('/:userId', UniversityController.deleteUniversity);

module.exports = UniversityRouter; 