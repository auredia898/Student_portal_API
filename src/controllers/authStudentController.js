const AuthService = require('../services/authStudentService');
const moment = require('moment')
const {authSchema} = require('../validators/authValidator')

class AuthController {
  async register(req, res) {
    try {

      const validatedData = await authSchema.validateAsync(req.body, { abortEarly: false });

      const { birthDate } = req.body;
      const date = moment(birthDate, 'DD-MM-YYYY', true);
      if (!date.isValid()) {
        throw new Error("Birth Date must be a valid date in the format DD-MM-YYYY");
      }
      const formattedBirthDate = date.toISOString();

      const { email, password, lastName, firstName, sex, address, phoneNumber, country} = validatedData;
      const profilePicture = req.file ? req.file.path : '';

      const userData = { email, password };
      const studentData = { lastName, firstName, sex, address, phoneNumber, country, birthDate: formattedBirthDate, profilePicture };

      // console.log(userData)
      // console.log(studentData)
      const { newUser, newStudent } = await AuthService.register(userData, studentData);

      // console.log(newStudent)
      // console.log(newUser)
      res.status(201).json({ user: newUser, student: newStudent });
    } catch (error) {
        if (error.isJoi) {
          const errorMessage = error.details.map((detail) => detail.message).join('; ');
          res.status(400).json({ error: errorMessage });
        } else {
            res.status(400).json({ error: error.message });
        }    
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