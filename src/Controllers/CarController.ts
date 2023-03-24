import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const newCar = await this.service.create(this.req.body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const allCars = await this.service.findAll();
      return this.res.status(200).json(allCars);
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

      const car = await this.service.findById(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const car: ICar = {
      ...this.req.body,
    };
    
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }
      const carUp = await this.service.updateById(id, car);
      if (!carUp) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json({ id, ...car });
    } catch (error) {
      this.next(error);
    }
  }
}