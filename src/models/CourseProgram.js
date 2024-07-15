const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const CourseProgram = sequelize.define('CourseProgram', {}, 
{
  tableName: 'CoursePrograms', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = CourseProgram;
