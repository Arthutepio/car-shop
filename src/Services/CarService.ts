import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar): Promise<Car | null> {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    
    return this.createCarDomain(newCar);
  }

  public async findAll(): Promise<(Car | null)[]> {
    const carModel = new CarModel();
    const allCars = await carModel.findAll();
  
    return allCars.map((e) => this.createCarDomain(e));
  }

  public async findById(id: string) {
    const carModel = new CarModel();
    const car = await carModel.findById(id);
    
    return this.createCarDomain(car);
  }
}