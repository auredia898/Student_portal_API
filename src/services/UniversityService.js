const { University, User } = require('../models/index');
const bcrypt = require('bcrypt');

class UniversityService {
  async getAllUniversities() {
    return await University.findAll({
      include: [{ model: User, attributes: ['id', 'email', 'password'] }],
    });
  }

async getUniversityById(id) {
    const university = await University.findOne({
      where: { id },
      include: [{ model: User, attributes: ['id', 'email', 'password'] }],
    });
    if (!university) {
      throw new Error('University not found');
    }
    return university;
}

  async updateUniversity(userId, universityData) {
    const university = await University.findOne({ where: { userId } });
    if (!university) {
      throw new Error('University not found');
    }

    const user = await User.findOne({ where: { id: userId } });
    if (universityData.email || universityData.password) {
      if (universityData.email) user.email = universityData.email;
      if (universityData.password) {
        user.password = await bcrypt.hash(universityData.password, 10);
      }
      await user.save();
    }

    await university.update(universityData);
    return { university, user };
  }

  async deleteUniversity(userId) {
    const university = await University.findOne({ where: { userId } });
    if (!university) {
      throw new Error('University not found');
    }
    const user = await User.findOne({ where: { id: userId } });
    await university.destroy();
    await user.destroy();
    return university;
  }
}

module.exports = new UniversityService();