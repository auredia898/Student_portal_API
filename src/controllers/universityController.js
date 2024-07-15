const UniversityService = require('../services/UniversityService');

class UniversityController {
  async getAllUniversities(req, res) {
    try {
      const universities = await  UniversityService.getAllUniversities();
      res.status(200).json(universities);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUniversityById(req, res) {
    try {
      const { id } = req.params;
      const university = await  UniversityService.getUniversityById(id);
      res.status(200).json(university);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateUniversity(req, res) {
    try {
      const { userId } = req.params;
      const universityData = req.body;
      const { university, user } = await  UniversityService.updateUniversity(userId, universityData);
      res.status(200).json({ university, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUniversity(req, res) {
    try {
      const { userId } = req.params;
      const university = await  UniversityService.deleteUniversity(userId);
      res.send({message: 'University deleted successfully!', university})
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}


module.exports = new UniversityController();