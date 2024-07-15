const express = require('express')
const StudentController = require('../controllers/studentController');

const upload = require('../middlewares/upload')

const StudentRouter = express.Router()


StudentRouter.get('/', StudentController.getAllStudents);
StudentRouter.get('/:userId', StudentController.getStudentByUserId);
StudentRouter.put('/:userId',upload.single('profilePicture'), StudentController.updateStudent);
StudentRouter.delete('/:userId', StudentController.deleteStudent);

module.exports = StudentRouter; 