const { Admission, CourseProgram } = require('../models/index')


const enrollmentToCourseValidation = async (studentId, courseId)=>{

    const admission = await Admission.findOne({
        where: { studentId, status: true }
    });

    if (!admission) {
        throw new Error("You do not have a valid admission!")
    }

    const courseProgram = await CourseProgram.findOne({
        where: { courseId, programId: admission.programId }
    });

    if (!courseProgram) {
        throw new Error("The course you have chosen is not part of the university program!")
    }

    return admission;
}

module.exports = enrollmentToCourseValidation