import Motorcycle from '../Domains/Motorcycle';
import IMotorcyclles from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  public createMotorcycleDomain(moto: IMotorcyclles | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcyclles): Promise<Motorcycle | null> {
    const carModel = new MotorcycleModel();
    
    const newMoto = await carModel.create(moto);
    
    return this.createMotorcycleDomain(newMoto);
  }
}