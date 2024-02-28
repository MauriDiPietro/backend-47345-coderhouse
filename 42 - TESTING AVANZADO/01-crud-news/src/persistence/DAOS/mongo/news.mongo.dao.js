import {NewsModel} from '../../models/news.model.js';
import {logger} from '../../../logs/news.logs.js'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default class DaoMongo {
    static init() {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL, {
            connectTimeoutMS: 300000
        }, (err) => {
            if(err) logger.fatal(err)
            else logger.info('Conectado a MongoDB!')
        });
    }

    async getAllNews(){
        try {
            const response = await NewsModel.find({});
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

    async getNew(id){
        try {
            const response = await NewsModel.findById(id);
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

    async createNew(obj){
        try {
            const response = await NewsModel.create(obj);
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

    async updateNew(id, body){
        try {
            const response = await NewsModel.findByIdAndUpdate(id, body, {new: true});
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

    async deleteNew(id){
        try {
            const response = await NewsModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

    async deleteAllNews(){
        try {
            const response = await NewsModel.deleteMany({});
            return response;
        } catch (error) {
            logger.fatal(error);
        }
    }

}