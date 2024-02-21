import { connect } from 'mongoose';
import config from '../../../config/config.js';

let MONGO_URL = '';
let ENV = config.ENV;

switch (ENV) {
  case 'dev':
      MONGO_URL = config.MONGO_LOCAL_URL;
      console.log('db local');
      break;
  case 'qa':
      MONGO_URL = config.MONGO_QA_URL;
      console.log('db qa');
      break;
  case 'prod':
      MONGO_URL = config.MONGO_ATLAS_URL;
      console.log('db prod');
      break;
  default:
      MONGO_URL = config.MONGO_LOCAL_URL;
      console.log('db local');
      break;
}

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log(`Conectado a la base de datos de MongoDB | ENV => ${ENV}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

