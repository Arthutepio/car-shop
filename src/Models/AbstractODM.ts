import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll() {
    return this.model.find({});
  }

  public async findById(id: string) {
    return this.model.findOne({ _id: id });
  }
  
  public async updateById(id: string, obj: Partial<T>) {  
    return this.model.findOneAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}