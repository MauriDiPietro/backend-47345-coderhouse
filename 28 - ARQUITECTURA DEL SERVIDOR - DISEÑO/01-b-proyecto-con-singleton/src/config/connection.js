import { connect } from "mongoose";
import "dotenv/config";

const connectionString = process.env.MONGO_URL;

// export const initMongoDB = async () => {
//   try {
//     await connect(connectionString);
//     console.log("Conectado a la base de datos de MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

export class ConnectMongoDB {
  static #instance;

  constructor() {
    connect(connectionString);
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Ya está conectado a MongoDB");
      return this.#instance;
    } else {
      this.#instance = new ConnectMongoDB();
      console.log("Conectado a MongoDB!");
      return this.#instance;
    }
  }
}
