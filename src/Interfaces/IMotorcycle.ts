import IVehicle from './IVehicle';
import { TCategory } from './TCategory';

interface IMotorcycles extends IVehicle{
  category: TCategory | string
  engineCapacity: number 
}

export default IMotorcycles;
