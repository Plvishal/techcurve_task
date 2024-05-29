import dotenv from 'dotenv';

dotenv.config();
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import apiRouter from './src/routes/getVender.js';
app.use('/api', apiRouter);

export { app };
