export default class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  //service

  async getById(id) {
    try {
      // console.log('DAO------------', id);
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(obj) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}


