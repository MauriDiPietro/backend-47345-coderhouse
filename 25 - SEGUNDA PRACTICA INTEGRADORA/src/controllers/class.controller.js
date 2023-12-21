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
      if (!item)
        createResponse(res, 404, {
          method: "getById",
          error: "Item not found!",
        });
      else createResponse(res, 200, item);
    } catch (error) {
      next(error.message);
    }
  };

  create = async (req, res, next) => {
    try {
      const newItem = await this.service.create(req.body);
      if (!newItem)
        createResponse(res, 404, {
          method: "create",
          error: "Error create item!",
        });
      else createResponse(res, 200, newItem);
    } catch (error) {
      next(error.message);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item)
        createResponse(res, 404, {
          method: "update",
          error: "Error update item!",
        });
      const itemUpd = await this.service.update(id, req.body);
      createResponse(res, 200, itemUpd);
    } catch (error) {
      next(error.message);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item)
        createResponse(res, 404, {
          method: "delete",
          error: "Error delete item!",
        });
      const itemUpd = await this.service.delete(id);
      createResponse(res, 200, itemUpd);
    } catch (error) {
      next(error.message);
    }
  };
}
