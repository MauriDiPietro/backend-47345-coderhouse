import config from "./config";
import { connect } from "mongoose";

export const dbConnection = async(): Promise<void> =>{
    try {
        await connect(config.MONGO_URL)
    } catch (error) {
        console.log(error);
    }
}
