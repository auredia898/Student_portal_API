const StudentService = require('../services/studentService');

class StudentController {
  async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getStudentByUserId(req, res) {
    try {
      const { userId } = req.params;
      const student = await StudentService.getStudentByUserId(userId);
      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateStudent(req, res) {
    try {
      const { userId } = req.params;
      const studentData = req.body;
      const { student, user } = await StudentService.updateStudent(userId, studentData);
      res.status(200).json({ student, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteStudent(req, res) {
    try {
      const { userId } = req.params;
      const student = await StudentService.deleteStudent(userId);
      res.send({message: 'user deleted successfully!', student})
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async enrollInCourse(req, res) {
    try {
      const { studentId, courseId } = req.body;
      const enrollment = await StudentService.enrollInCourse(studentId, courseId);
      res.status(201).json(enrollment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req, res) {
    try {
      const userId = req.user.userId; 
      const profile = await StudentService.getProfile(userId);
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new StudentController();