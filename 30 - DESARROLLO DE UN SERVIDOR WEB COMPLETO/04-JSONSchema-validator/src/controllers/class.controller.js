import { createResponse } from "../utils.js";

export default class Controllers {
  constructor(service) {
    this.service = service;
  }
  getAll = async (req, res, next) => {
    try {
      const items = await this.service.getAll();
      createResponse(res, 200, items);
    } catch (error) {
      next(error.message);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) createResponse(res, 404, {method: 'getById', error: "Item not found!"});
      else createResponse(res, 200, item);
    } catch (error) {
      next(error.message);
    }
  };

  create = async (req, res, next) => {
    try {
      const newItem = await this.service.create(req.body);
      if (!newItem) createResponse(res, 404, {method: 'create', error: "Validation error!"});
      else createResponse(res, 200, newItem);
    } catch (error) {
      next(error.message);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      let item = await this.service.getById(id);
      if (!item) createResponse(res, 404, {method: 'update', error: "Item not found!"});
      const itemUpdated = await this.service.update(id, req.body);
      createResponse(res, 200, itemUpdated);
    } catch (error) {
      next(error.message);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) createResponse(res, 404, {method: 'delete', error: "Item not found!"});
      await this.service.delete(id);
      createResponse(res, 200, "item deleted");
    } catch (error) {
      next(error.message);
    }
  };
}


