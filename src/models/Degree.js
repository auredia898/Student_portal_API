const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const Degree = sequelize.define('Degree', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nbYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Degrees', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = Degree;
