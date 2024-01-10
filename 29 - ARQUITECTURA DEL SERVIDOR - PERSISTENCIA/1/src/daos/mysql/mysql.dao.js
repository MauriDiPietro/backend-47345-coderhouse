export default class MySqlDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      return this.model.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      await this.model.create(obj);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, body) {
    try {
      return await this.model.update(body, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
