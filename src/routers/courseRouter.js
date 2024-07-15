const express = require('express')
const CourseController = require('../controllers/courseController');

const CourseRouter = express.Router()

CourseRouter.post('/', CourseController.createCourse);
CourseRouter.post('/add-program', CourseController.addProgramToCourse);
CourseRouter.get('/', CourseController.getAllCourses);
CourseRouter.get('/:id', CourseController.getCourseById);
CourseRouter.put('/:id', CourseController.updateCourse);
CourseRouter.delete('/:id', CourseController.deleteCourse);

module.exports = CourseRouter; 