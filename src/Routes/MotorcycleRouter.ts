import { Router } from 'express';
import MotorcycleController from '../Controllers/MortorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

motorcycleRouter.get('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).findAll());

export default motorcycleRouter;
