import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();
import errors from "../utils/errors.dictionary.js";

export default class Controllers {
  constructor(service) {
    this.service = service;
  }
  getAll = async (req, res, next) => {
    try {
      const items = await this.service.getAll();
      return httpResponse.Ok(res, items);
    } catch (error) {
      //next lo envía al middleware
      next(error)
      // --> errorHandler
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) return httpResponse.NotFound(res, errors.PROD_NOT_FOUND);
      else return httpResponse.Ok(res, item);
    } catch (error) {
      next(error)
    }
  };

  create = async (req, res, next) => {
    try {
      const newItem = await this.service.create(req.body);
      if (!newItem) return httpResponse.NotFound(res, "Validation error!");
      else return httpResponse.Ok(res, newItem);
    } catch (error) {
      next(error)
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      let item = await this.service.getById(id);
      if (!item) return httpResponse.NotFound(res, "Item not found!");
      const itemUpdated = await this.service.update(id, req.body);
      return httpResponse.Ok(res, itemUpdated);
    } catch (error) {
      next(error)
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) return httpResponse.NotFound(res, "Item not found!");
      await this.service.delete(id);
      return httpResponse.Ok(res, "item deleted");
    } catch (error) {
      next(error)
    }
  };
}


