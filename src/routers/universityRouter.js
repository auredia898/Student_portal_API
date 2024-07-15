const express = require('express')
const UniversityController = require('../controllers/universityController');
const { verifyToken, verifyRole} = require('../middlewares/authMiddlware');

const upload = require('../middlewares/upload')

const UniversityRouter = express.Router()

UniversityRouter.use(verifyToken);

UniversityRouter.get('/', UniversityController.getAllUniversities);
UniversityRouter.get('/:id', UniversityController.getUniversityById);

UniversityRouter.use(verifyRole( ['ROLE_ADMIN'] ));
UniversityRouter.put('/:userId',upload.single('logo'), UniversityController.updateUniversity);
UniversityRouter.delete('/:userId', UniversityController.deleteUniversity);

module.exports = UniversityRouter; 