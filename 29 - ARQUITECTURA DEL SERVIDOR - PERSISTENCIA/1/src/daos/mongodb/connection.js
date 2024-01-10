import { connect } from "mongoose";
import 'dotenv/config';

export const initMongoDB = async() => {
  try {
    await connect(
      process.env.MONGO_LOCAL_URL
    );
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(error);
  }
}
