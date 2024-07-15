const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const CourseStudent = sequelize.define('CourseStudent', {}, 
{
  tableName: 'CourseStudents', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = CourseStudent;
