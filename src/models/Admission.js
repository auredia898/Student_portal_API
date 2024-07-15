const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const Admission = sequelize.define('Admission', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  lastGraduation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  lastAverage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  card: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motivationLetter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  degreeId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  universityId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  programId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'Admissions', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = Admission;
