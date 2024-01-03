import ProductMongoDao from "./daos/mongodb/products/product.dao.js";
import UserMongoDao from "./daos/mongodb/users/user.dao.js";
import ProductFSDao from "./daos/filesystem/products/product.dao.js";
import UserFSDao from "./daos/filesystem/users/user.dao.js";
import 'dotenv/config';
import { initMongoDB } from "../config/connection.js";

let userDao;
let prodDao;
// const persistence = process.env.PERSISTENCE;
const persistence = process.argv[2];

switch (persistence) {
    case "FS":
        userDao = new UserFSDao('./src/persistence/daos/filesystem/users.json');
        prodDao = new ProductFSDao('./src/persistence/daos/filesystem/products.json');
        console.log(persistence);
        break;
    case "MONGO":
        await initMongoDB();
        userDao = new UserMongoDao();
        prodDao = new ProductMongoDao();
        console.log(persistence);
    default:
        userDao = new UserFSDao('./src/persistence/daos/filesystem/users.json');
        prodDao = new ProductFSDao('./src/persistence/daos/filesystem/products.json');
        break;
}

export default { userDao, prodDao };