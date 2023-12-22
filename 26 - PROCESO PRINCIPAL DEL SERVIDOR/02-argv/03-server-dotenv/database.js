import { connect } from "mongoose";
import "dotenv/config";

let MONGO_URL = "";

switch (process.env.NODE_ENV) {
  case "dev":
    MONGO_URL = process.env.MONGO_LOCAL_URL;
    console.log("db local");
    break;
  case "qa":
    MONGO_URL = process.env.MONGO_ATLAS_URL_QA;
    console.log("db qa");
    break;
  case "prod":
    MONGO_URL = process.env.MONGO_ATLAS_URL;
    console.log("db prod");
    break;
  default:
    MONGO_URL = process.env.MONGO_LOCAL_URL;
    console.log("db local");
    break;
}

try {
  await connect(MONGO_URL);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(`ERROR => ${error}`);
}