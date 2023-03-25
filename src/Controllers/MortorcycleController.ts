import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const newMoto = await this.service.create(this.req.body);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }
}