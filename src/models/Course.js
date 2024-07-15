const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  credits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  degreeId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'Courses', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = Course;
