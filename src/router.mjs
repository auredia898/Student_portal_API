import express from 'express';

import authStudentRouter from '../src/routers/authStudentRouter.js';
import authUniversityRouter from '../src/routers/authUniversityRouter.js';
import StudentRouter from '../src/routers/studentRouter.js';
import UniversityRouter from '../src/routers/universityRouter.js';
import AdmissionRouter from '../src/routers/admissionRouter.js'
import CourseRouter from '../src/routers/courseRouter.js';
import DegreeRouter from '../src/routers/degreeRouter.js';
import ProgramRouter from '../src/routers/programRouter.js';

const router = express();
// const router = express.Router(); 


router.use("/users/students", authStudentRouter);
router.use("/universities/auth", authUniversityRouter);
router.use("/users/students", StudentRouter);
router.use("/universities", UniversityRouter);
router.use('/admissions', AdmissionRouter);
router.use('/courses', CourseRouter);
router.use('/degrees', DegreeRouter);
router.use('/programs', ProgramRouter);

export default router;