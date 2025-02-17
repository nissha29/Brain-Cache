import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';
import userRouter from './routers/user.route';
import contentRouter from './routers/content.router';
import shareRouter from './routers/share.router';

const app = express();
app.use(express.json());
dotenv.config();

app.use('/api/v1', userRouter);
app.use('/api/v1', contentRouter);
app.use('/api/v1', shareRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, async()=> {
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})