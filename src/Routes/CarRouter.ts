import { Router, Request, Response } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/cars', (req: Request, res: Response) => new CarController(req, res).create());
carRouter.get('/cars', (req: Request, res: Response) => new CarController(req, res).findAll());

export default carRouter;