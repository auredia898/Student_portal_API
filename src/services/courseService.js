const { Course, Degree, Program } = require('../models/index')

class CourseService{

    async createCourse(courseData){
        const degree = await Degree.findOne({ where: {id: courseData.degreeId} } );
        if(!degree){
            throw new Error('Degree not found!')
        }

        if(courseData.level > degree.nbYear){
            throw new Error(`Level can't be greater than ${degree.nbYear}`)
        }

        const newCourse = await Course.create(courseData);

        if(courseData.programId) {
            const program = await Program.findOne( { where: {id: courseData.programId } });
            if(!program){
                throw new Error('Program not found!');
            }
            await newCourse.addProgram(program);
        }
        return newCourse;
    }

    async updateCourse(id, courseData){
        console.log(`Updating course with ID: ${id}`);
        console.log(`Course data: ${JSON.stringify(courseData)}`);
        const course = await Course.findOne({ where: { id } })
        console.log(course)
        if(!course){
            throw new Error ('Course not found!')        
        }

        console.log(`Course found: ${JSON.stringify(course)}`);
        const degree = await Degree.findOne({ where: {id: courseData.degreeId} } );
        if(!degree){
            throw new Error('Degree not found!')
        }

        if(courseData.level > degree.nbYear){
            throw new Error(`Level can't be greater than ${degree.nbYear}`)
        }

        // await course.update(courseData)
        const updatedCourse = await course.update({
            name: courseData.name || course.name,
            description: courseData.description || course.description,
            credits: courseData.credits || course.credits,
            level: courseData.level || course.level,
            degreeId: courseData.degreeId || course.degreeId,
        });
        console.log(`Course updated: ${JSON.stringify(updatedCourse)}`);

        if(courseData.programId){
            const program = await Program.findOne({ where: { id: courseData.programId } });
            if(!program){
                throw new Error ('Program not found');
            }
            await course.setPrograms([program]);
        }
        return updatedCourse;
    }

    async deleteCourse(id){
        const course = await Course.findOne({ where: { id } })
        if(!course){
            throw new Error ('Course not found!')        
        }    
        await course.destroy();
        return course;
    }

    async getAllCourses(){
        return await Course.findAll({
            include: [
                { model: Degree}
            ],
        });
    }

    async getCourseById(id){
        const course = await Course.findOne({
            where: {id},
            include: [
                { model: Degree}
            ],
        });
        if (!course){
            throw new Error ('Course not found!') 
        }
        return course;
    }

    async addProgramToCourse(programId, courseId){

        const program = await Program.findOne( { where: {id: programId } } )
        if(!program){
            throw new Error('Program not found!');
        }

        const course = await Course.findOne( { where: {id: courseId } })
        if(!course){
            throw new Error('Degree not found!')
        }
        
        await course.addProgram(program)
        return course;
    }
}

module.exports = new CourseService()