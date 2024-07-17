const { Student, User, CourseStudent, CourseProgram } = require('../models/index');
const bcrypt = require('bcryptjs');
const validateEnrollment = require('../utils/enrollmentToCourseValidation')

class StudentService {
  async getAllStudents() {
    return await Student.findAll({
      include: [{ model: User, attributes: ['id', 'email', 'password'] }],
    });
  }

  async getStudentByUserId(userId) {
    const student = await Student.findOne({
      where: { userId },
      include: [{ model: User, attributes: ['id', 'email', 'password'] }],
    });
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }

  async updateStudent(userId, studentData) {
    const student = await Student.findOne({ where: { userId } });
    if (!student) {
      throw new Error('Student not found');
    }

    const user = await User.findOne({ where: { id: userId } });
    if (studentData.email || studentData.password) {
      if (studentData.email) user.email = studentData.email;
      if (studentData.password) {
        user.password = await bcrypt.hash(studentData.password, 10);
      }
      await user.save();
    }

    await student.update(studentData);
    return { student, user };
  }

  async deleteStudent(userId) {
    const student = await Student.findOne({ where: { userId } });
    if (!student) {
      throw new Error('Student not found');
    }
    const user = await User.findOne({ where: { id: userId } });
    await student.destroy();
    await user.destroy();
    return student;
  }

  async enrollInCourse(studentId, courseId) {

    await validateEnrollment(studentId, courseId);

    const enrollment = await CourseStudent.create({ studentId, courseId });
    return enrollment;
  }

  async getProfile(userId) {
    const student = await Student.findOne({
      where: { userId },
      include: [{ model: User, attributes: ['id', 'email', 'role'] }],
    });
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }
  
}

module.exports = new StudentService();