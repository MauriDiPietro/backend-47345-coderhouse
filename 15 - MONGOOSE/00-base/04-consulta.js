import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const consulta = async () => {
    try {
        await initMongoDB();
        const c1 = await UserModel.find();
        console.log(c1);
        console.log('-------------------------------');
        const c2 = await UserModel.findOne({ age: { $gte: 50 } })
        console.log(c2);
    } catch (error) {
        console.log(error);
    }
}

consulta()