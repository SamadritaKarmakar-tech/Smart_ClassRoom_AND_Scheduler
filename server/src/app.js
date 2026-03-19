import express from 'express';
import { errorHandler } from './utils/errorHandler.js';
//
import apiRouter from './routes/index.js';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is running',
  });
});

app.use('/api', apiRouter);

app.use(errorHandler);
export default app;
