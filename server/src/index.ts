import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';
import userRouter from './routers/user.route';
import contentRouter from './routers/content.router';
import shareRouter from './routers/share.router';
import cors from 'cors'
import { generateEmbedding } from './services/embedding.service';

const app = express();
app.use(express.json());
dotenv.config();

const allowedOrigins = ['http://localhost:5173', 'https://brain-cache-extends.vercel.app'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'authorization', 'Cookie']
}));

app.use('/api/v1', userRouter);
app.use('/api/v1', contentRouter);
app.use('/api/v1', shareRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const embedding = generateEmbedding("I am Nisha and nisha is in love with Pranav");

app.listen(process.env.PORT, async()=> {
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})