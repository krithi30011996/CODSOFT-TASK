import './config/instrument.js'; 
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dns from 'dns';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

await connectDB();
await connectCloudinary();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => res.send("API Working"));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks);
app.post('/api/company/register', companyRoutes);

const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});