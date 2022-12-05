import express from 'express';
import { connectDB } from './config/db';
import authRouter from './routes/auth_route';
import blogRouter from './routes/blog_route';
import 'dotenv/config';

const app = express();
app.use(express.json());

connectDB();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/blog', blogRouter);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log('Server is running in port 5009')
})