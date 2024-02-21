import factory from "../daos/factory.js";
const { userDao } = factory;
import UserRespDTO from "../dtos/user.resp.dto.js";

export default class UserRepository {
    constructor() {
        this.dao = userDao;
    }

    async getUserById(id) {
        try {
            const user = await this.dao.getById(id);
            const userDTO = new UserRespDTO(user);
            return userDTO;
        } catch (error) {
            throw new Error(error.message);
        }
    };
}