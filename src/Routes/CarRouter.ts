import { Router, Request, Response, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/cars', (req: Request, res: Response, next: NextFunction) => 
  new CarController(req, res, next).create());

carRouter.get('/cars', (req: Request, res: Response, next: NextFunction) => 
  new CarController(req, res, next).findAll());

carRouter.get('/cars/:id', (req: Request, res: Response, next: NextFunction) => 
  new CarController(req, res, next).findById());

export default carRouter;