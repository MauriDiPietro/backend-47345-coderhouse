/*
vamos a cambiar los métodos y utilizar los de sequelize en lugar de los de mongoose
*/

export default class MySqlDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      // console.log('DAO------------', id);
      const response = await this.model.findOne({
        where: {
            id: id
        }
    });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, body) {
    try {
      await this.model.update(body, {
        where: {
            id: id
        }
    })
      return body;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const response = await this.model.destroy({
        where: {
            id: id
        }
    });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}


//! --> connection

