const CourseService = require('../services/courseService');


class CourseController{

    async createCourse (req, res){
        try{
            const {name, description, credits, degreeId, level, programId} = req.body
            const courseData = {
                name,
                description,
                credits,
                degreeId,
                level,
                programId
            }
            const newCourse = await CourseService.createCourse(courseData)
            res.status(201).json(newCourse)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateCourse(req, res){
        try{
            const { id } = req.params;
            const {name, description, credits, degreeId, level, programId} = req.body
            const courseData = {
                name,
                description,
                credits,
                degreeId,
                level,
                programId
            }
            console.log(`Course data to update: ${JSON.stringify(courseData)}`);
            const updateCourse = await CourseService.updateCourse( id, courseData );
            res.status(200).json(updateCourse);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteCourse(req, res){
        try{
            const { id } = req.params;
            const deleteCourse = await CourseService.deleteCourse(id)
            res.status(200).send({message: 'Course deleted successfully!', deleteCourse})
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllCourses(req, res){
        try{
            const courses = await CourseService.getAllCourses();
            res.status(200).json(courses);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getCourseById(req, res){
        try{
            const { id } = req.params;
            const course = await CourseService.getCourseById(id);
            res.status(200).json(course);
        }catch(error){
            res.staus(404).json({ message: error.message})
        }
    }

    async addProgramToCourse(req, res){
        try{
            const { programId, courseId } = req.body;
            const course = await CourseService.addProgramToCourse(programId, courseId);
            res.status(200).json(course); 
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new CourseController();