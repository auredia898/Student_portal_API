const AuthService = require('../services/authStudentService');
const moment = require('moment')


class AuthController {
  async register(req, res) {
    try {
      const { email, password, lastName, firstName, sex, address, phoneNumber, country, birthDate } = req.body;
      const profilePicture = req.file ? req.file.path : '';
      const formattedBirthDate = moment(birthDate, 'DD-MM-YYYY').toISOString(); 

      const userData = { email, password };
      const studentData = { lastName, firstName, sex, address, phoneNumber, country, birthDate: formattedBirthDate, profilePicture };

      // console.log(userData)
      // console.log(studentData)
      const { newUser, newStudent } = await AuthService.register(userData, studentData);

      // console.log(newStudent)
      // console.log(newUser)
      res.status(201).json({ user: newUser, student: newStudent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const { token } = await AuthService.login(email, password);

      res.status(200).json({ token })
    } catch (error) {
        res.status(401).json({error: 'Authentication failed!'})
    }
  }
}

module.exports = new AuthController();