const validateEnrollment = require('../utils/enrollmentToCourseValidation')

const validationEnrollInCourse = async (req, res, next) => {
    try {
        const { studentId, courseId } = req.body;
        await validateEnrollment(studentId, courseId);
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = validationEnrollInCourse ;  