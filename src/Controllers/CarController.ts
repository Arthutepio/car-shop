import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private service;
  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async create() {
    const newCar = await this.service.create(this.req.body);

    return this.res.status(201).json(newCar);
  }

  public async findAll() {
    const allCars = await this.service.findAll();

    return this.res.status(201).json(allCars);
  }
}