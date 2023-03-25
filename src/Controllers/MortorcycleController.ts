import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    try {
      const allMoto = await this.service.findAll();
      return this.res.status(200).json(allMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }

      const moto = await this.service.findById(id);
      if (!moto) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }
}