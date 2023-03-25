import IMotorcyclles from '../Interfaces/IMotorcycles';
import { TCategory } from '../Interfaces/TCategory';
import Vehicle from './Vehicle';

export default class Motocycle extends Vehicle {
  private category: TCategory;
  private engineCapacity: number;

  constructor(moto: IMotorcyclles) {
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