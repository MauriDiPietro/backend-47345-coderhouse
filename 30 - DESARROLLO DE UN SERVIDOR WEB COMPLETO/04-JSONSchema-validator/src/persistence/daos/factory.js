import ProductDaoMongo from "./mongodb/product.dao.js";
import UserDaoMongo from "./mongodb/user.dao.js";
import { initMongoDB } from "./mongodb/connection.js";
/* ------------------------------------ - ----------------------------------- */
import ProductDaoMySql from "./mysql/product.dao.js";
import UserDaoMySql from "./mysql/user.dao.js";
import { initMySqlDB } from "./mysql/connection.js";
/* ------------------------------------ - ----------------------------------- */
import ProductDaoFS from "./filesystem/product.dao.js";

let userDao;
let productDao;
let persistence = process.argv[2];
// let persistence = process.env.PERSISTENCE;

switch (persistence) {
  case "file":
    productDao = new ProductDaoFS(
      "./src/daos/filesystem/products.json"
    );
    //userDao = new UserDaoFS(...)
    break;
  case "mongo":
    await initMongoDB();
    userDao = new UserDaoMongo();
    productDao = new ProductDaoMongo();
    break;
    /* ------------------------------------ - ----------------------------------- */
  case "mysql":
    await initMySqlDB();
    userDao = new UserDaoMySql();
    productDao = new ProductDaoMySql();
    break;
    /* ------------------------------------ - ----------------------------------- */
  default:
    productDao = new ProductDaoFS(
      "./src/daos/filesystem/products.json"
    );
    //userDao = new UserDaoFS(...)
    break;
}

export default { userDao, productDao };

