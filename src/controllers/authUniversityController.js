const AuthService = require('../services/authUniversityService');

class AuthController {
  async register(req, res) {
    try {
      const { email, password, name, location, description, emailUniversity, phoneNumber, country } = req.body;
      const logo = req.file ? req.file.path : '';

      const userData = { email, password };
      const universityData = { name, location, description, emailUniversity, phoneNumber, country,logo };

      const { newUser, newUniversity } = await AuthService.register(userData, universityData);

      res.status(201).json({ user: newUser, student: newUniversity });
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