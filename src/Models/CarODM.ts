import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String },
      year: { type: Number },
      color: { type: String },
      status: { type: Boolean },
      buyValue: { type: Number },
      doorsQty: { type: Number },
      seatsQty: { type: Number },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
}