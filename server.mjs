import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dirname } from 'path';
import authStudentRouter from './src/routers/authStudentRouter.js';
import authUniversityRouter from './src/routers/authUniversityRouter.js';
import StudentRouter from './src/routers/studentRouter.js';
import UniversityRouter from './src/routers/universityRouter.js';
import AdmissionRouter from './src/routers/admissionRouter.js'
import CourseRouter from './src/routers/courseRouter.js';
import DegreeRouter from './src/routers/degreeRouter.js';
import ProgramRouter from './src/routers/programRouter.js';
dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users/students", authStudentRouter);
app.use("/api/universities/auth", authUniversityRouter);
app.use("/api/users/students", StudentRouter);
app.use("/api/universities", UniversityRouter);
app.use('/api/admissions', AdmissionRouter);
app.use('/api/courses', CourseRouter);
app.use('/api/degrees', DegreeRouter);
app.use('/api/programs', ProgramRouter);


app.get("/", (req, res) =>{
    res.send("welcome to my app");
});

app.listen(PORT, ()=> {
    console.log(`App started successfully on http://localhost:${PORT}`)
})