import mongoose from 'mongoose';
import config from '../config/config.js';
import { getEnvironment } from './getEnvironment.js';

export const initMongoDB = async () => {
  try {
    const environment = getEnvironment();
    environment === 'PROD' ? await mongoose.connect(config.MONGO_ATLAS_PROD) :
    environment === 'QA' ? await mongoose.connect(config.MONGO_ATLAS_QA) :
    await mongoose.connect(config.MONGO_LOCAL_URL)
    console.log(`Conectado a MongoDB en modo: ${environment}`);
  } catch (error) {
    console.log(error);
  }
};