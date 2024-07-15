const express = require('express')
const CourseController = require('../controllers/courseController');
const { verifyToken, verifyRole} = require('../middlewares/authMiddlware');

const CourseRouter = express.Router()

CourseRouter.use(verifyToken);
CourseRouter.get('/', CourseController.getAllCourses);
CourseRouter.get('/:id', CourseController.getCourseById);

CourseRouter.use(verifyRole( ['ROLE_ADMIN'] ));
CourseRouter.post('/', CourseController.createCourse);
CourseRouter.post('/add-program', CourseController.addProgramToCourse);
CourseRouter.put('/:id', CourseController.updateCourse);
CourseRouter.delete('/:id', CourseController.deleteCourse);

module.exports = CourseRouter; 