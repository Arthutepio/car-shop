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
    const motoModel = new MotorcycleModel();
    
    const newMoto = await motoModel.create(moto);
    
    return this.createMotorcycleDomain(newMoto);
  }

  public async findAll(): Promise<(Motorcycle | null)[]> {
    const motoModel = new MotorcycleModel();
    const allMoto = await motoModel.findAll();
  
    return allMoto.map((moto) => this.createMotorcycleDomain(moto));
  }

  public async findById(id: string) {
    const motoModel = new MotorcycleModel();
    const moto = await motoModel.findById(id);
    
    return this.createMotorcycleDomain(moto);
  }
}