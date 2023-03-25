import IMotorcycle from '../Interfaces/IMotorcycle';
import { TCategory } from '../Interfaces/TCategory';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: TCategory | string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super({
      id: moto.id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
    });

    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}