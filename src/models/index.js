const DataTypes = require ('sequelize')
const sequelize = require('../../db');
const User = require('./User')
const Student = require('./Student')
const University = require('./University')
const Course = require('./Course')
const Degree = require('./Degree')
const Admission = require('./Admission')
const Program = require('./Program')
const CourseStudent = require('./CourseStudent')
const ProgramDegree = require('./ProgramDegree')
const CourseProgram = require('./CourseProgram')


//relation one-to-one entre Student et User
User.hasOne(Student, {
  foreignKey: 'userId',
  onDelete: 'RESTRICT',
});
Student.belongsTo(User, {
  foreignKey: 'userId',
});

//relation one-to-one entre University et User
User.hasOne(University, {
  foreignKey: 'userId',
  onDelete: 'RESTRICT',
});
University.belongsTo(User, {
  foreignKey: 'userId',
});

//relation one-to-many entre Course et Degree
Degree.hasMany(Course, {
  foreignKey: 'degreeId',
  onDelete: 'CASCADE',
});
Course.belongsTo(Degree, {
  foreignKey: 'degreeId',
});

//relation one-to-many entre Admission et Unuversity
University.hasMany(Admission, {
  foreignKey: 'universityId',
  onDelete: 'CASCADE',
});
Admission.belongsTo(University, {
  foreignKey: 'universityId',
});

//relation one-to-many entre Admission et Degree
Degree.hasMany(Admission, {
  foreignKey: 'degreeId',
  onDelete: 'CASCADE',
});
Admission.belongsTo(Degree, {
  foreignKey: 'degreeId',
});

//relation one-to-many entre Admission et Student
Student.hasMany(Admission, {
  foreignKey: 'studentId',
  onDelete: 'CASCADE',
});
Admission.belongsTo(Student, {
  foreignKey: 'studentId',
});

//relation one-to-many entre Admission et Program
Program.hasMany(Admission, {
  foreignKey: 'programId',
  onDelete: 'CASCADE',
});
Admission.belongsTo(Program, {
  foreignKey: 'programId',
});

//relation one to many entre Program et University
University.hasMany(Program, {
  foreignKey: 'universityId',
  onDelete: 'RESTRICT',
});
Program.belongsTo(University, {
  foreignKey: 'universityId',
});

//relation many-to-many entre Course et Student
Course.belongsToMany(Student, { through: CourseStudent, foreignKey: 'courseId'} )
Student.belongsToMany(Course, { through: CourseStudent, foreignKey: 'studentId'} )

//relation many-to-many entre Course et Program
Course.belongsToMany(Program, { through: CourseProgram, foreignKey: 'courseId'} )
Program.belongsToMany(Course, { through: CourseProgram, foreignKey: 'programId'} )

//relation many-to-many entre Program et Degree
Program.belongsToMany(Degree, { through: ProgramDegree, foreignKey: 'programId'} )
Degree.belongsToMany(Program, { through: ProgramDegree, foreignKey: 'degreeId'} ) 


sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports =  { User, Student, University, Degree, Program, Course, Admission, CourseStudent, CourseProgram, ProgramDegree };
