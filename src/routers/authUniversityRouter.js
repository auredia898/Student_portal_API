const express = require('express')
const authUniversityController = require('../controllers/authUniversityController');

const upload = require('../middlewares/upload')

const authUniversityRouter = express.Router()

authUniversityRouter.post('/register', upload.single('logo'),authUniversityController.register);
authUniversityRouter.post('/login',authUniversityController.login);

module.exports = authUniversityRouter;