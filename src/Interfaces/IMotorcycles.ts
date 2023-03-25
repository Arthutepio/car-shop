import IVehicle from './IVehicle';

type TCategory = 'Street' | 'Custom' | 'Trail';

interface IMotorcyclles extends IVehicle{
  category: TCategory
  engineCapacity: number 
}

export default IMotorcyclles;
