import IVehicle from './IVehicle';
import { TCategory } from './TCategory';

interface IMotorcyclles extends IVehicle{
  category: TCategory | string
  engineCapacity: number 
}

export default IMotorcyclles;
