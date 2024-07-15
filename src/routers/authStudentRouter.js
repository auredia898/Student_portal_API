const express = require('express')
const authStudentController = require('../controllers/authStudentController');

const upload = require('../middlewares/upload')

const authStudentRouter = express.Router()

authStudentRouter.post('/register', upload.single('profilePicture'),authStudentController.register);
authStudentRouter.post('/login',authStudentController.login);

module.exports = authStudentRouter;