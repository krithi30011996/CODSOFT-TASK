import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dns from 'dns';
import connectDB from './config/db.js';

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => res.send("API Working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});