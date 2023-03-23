import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  public async create(car: ICar): Promise<Car> {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    
    return new Car(newCar);
  }
}
