const DataTypes = require ('sequelize')
const sequelize = require('../../db')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ROLE_STUDENT',
  },
}, {
  tableName: 'Users', 
  timestamps: true, 
  updatedAt: 'updateTimestamp' 
});

module.exports = User;
