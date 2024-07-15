const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const ProgramDegree = sequelize.define('ProgramDegree', {}, 
{
  tableName: 'ProgramDegrees', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = ProgramDegree;
