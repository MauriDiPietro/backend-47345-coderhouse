import MongoDao from "./mongo.dao.js";
import { UserModel } from "./models/user.model.js";
import { createHash, isValidPassword } from "../../utils.js";

export default class UserDaoMongo extends MongoDao {
    constructor() {
        super(UserModel);
    }

    async register(user) {
        try {
            const { email, password } = user;
            const existUser = await this.getByEmail( email );
            if(!existUser) return await this.model.create({
                ...user,
                password: createHash(password)
            });
            else return false;
        } catch (error) {
            console.log(error);
        }
    }

    async getByEmail(email) {
        try {
            const user = await this.model.findOne({ email });
            if(user) return user;
            else return false;
        } catch (error) {
            console.log(error);
        }
    };

    async login(user) {
        try {
            const { email, password } = user;
            const userExist = await this.getByEmail( email );
            if(userExist) {
                const passValid = isValidPassword(userExist, password);
                if(!passValid) return false;
                else return userExist;
            } return false;
        } catch (error) {
            console.log(error);
        }
    }
};