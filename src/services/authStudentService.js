const bcrypt = require('bcrypt')
const { User, Student } = require('../models/index')
const jwt = require('jsonwebtoken');

class AuthService {   

  async register(userData, studentData) {
    const { email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    const newStudent = await Student.create({
      ...studentData,
      userId: newUser.id,
    });

    return { newUser, newStudent };
  }


  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Authentication failed, user not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Authentication failed, Invalid password');
    }

    const token = jwt.sign({ userId: user.id , role: user.role }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    return { token };  
  }
}

module.exports = new AuthService();