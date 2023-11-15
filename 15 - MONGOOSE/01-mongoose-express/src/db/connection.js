import { connect } from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/coder47345";
const MONGO_ATLAS_URL = 'mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/coder47345?retryWrites=true&w=majority'

// export const initMongoDB = async () => {
  try {
    await connect(MONGO_ATLAS_URL);
    console.log("Conectado a la base de datos de MONGODB");
  } catch (error) {
    console.log(error);
  }
// };
