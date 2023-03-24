import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    return this.model.find({});
  }

  public async findById(id: string) {
    return this.model.findOne({ _id: id });
  }

  public async updateById(id: string, car: ICar) {
    const filter = { _id: id };
    const update = { ...car };
    
    return this.model.findOneAndUpdate(filter, update, { new: true });
  }
}