const express = require('express')
const StudentController = require('../controllers/studentController');
const validationEnrollInCourse = require('../middlewares/validationEnrollInCourse')
const { verifyToken, verifyRole} = require('../middlewares/authMiddlware');

const upload = require('../middlewares/upload')

const StudentRouter = express.Router()

StudentRouter.use(verifyToken);

StudentRouter.use(verifyRole( ['ROLE_STUDENT'] ));
StudentRouter.get('/', StudentController.getAllStudents);
StudentRouter.get('/:userId', StudentController.getStudentByUserId);
StudentRouter.put('/:userId',upload.single('profilePicture'), StudentController.updateStudent);

StudentRouter.post('/enroll', validationEnrollInCourse, StudentController.enrollInCourse)

StudentRouter.use(verifyRole( ['ROLE_ADMIN'] ));

StudentRouter.delete('/:userId', StudentController.deleteStudent);

module.exports = StudentRouter; 