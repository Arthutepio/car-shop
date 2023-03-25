import express from 'express';
import carRouter from './Routes/CarRouter';
import ErrorHandler from './Middlewares/ErrorHandler';
import motorcycleRouter from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
