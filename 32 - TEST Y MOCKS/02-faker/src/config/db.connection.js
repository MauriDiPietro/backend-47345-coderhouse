import config from './config.js';
import { connect } from 'mongoose';

export const dbConnection = async() => {
    const MONGO_URI = config.MONGO_URI;
    await connect(MONGO_URI);
};