const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const Program = sequelize.define('Program', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  universityId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'Programs', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = Program;
