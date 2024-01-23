import { TicketModel } from "./models/ticket.model.js";

export default class TicketDaoMongoDB {
    async create(obj) {
        try {
          return await TicketModel.create(obj);
        } catch (error) {
          throw new Error(error);
        }
      }
};


