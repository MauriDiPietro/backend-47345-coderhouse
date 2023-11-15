import { connect } from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/coder47345";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log('Conectado a la base de datos de MONGODB');
  } catch (error) {
    console.log(error);
  }
};




