import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

//intialize express
const app = express();

//connect to database
await connectDB();


//middlewars
app.use(cors());
app.use(express.json());

//roues
app.get('/', (req,res) => res.send("API Working"));

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});