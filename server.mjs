import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/router.mjs';

dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);


app.get("/", (req, res) =>{
    res.send("welcome to my app");
});

app.listen(PORT, ()=> {
    console.log(`App started successfully on http://localhost:${PORT}`)
})