export default class Services {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    try {
      const items = await this.model.find({});
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    try {
      const item = await this.model.findById(id);
      if (!item) return false;
      else return item;
    } catch (error) {
      console.log(error);
    }
  };

  create = async (obj) => {
    try {
      const newItem = await this.model.create(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, obj) => {
    try {
      const response = await this.model.findByIdAndUpdate(id, obj, {new: true});
     return response;
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    try {
      const itemDeleted = await this.model.findByIdAndDelete(id);
      return itemDeleted;
    } catch (error) {
      console.log(error);
    }
  };
}


