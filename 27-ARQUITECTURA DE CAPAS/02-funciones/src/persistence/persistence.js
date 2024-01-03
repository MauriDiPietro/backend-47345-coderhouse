import * as ProductDaoMongo from './mongodb/mongodb.js'
import * as UserDaoMongo from '......'
import * as ProductDaoFS from '......'
import * as UserDaoFS from '......'

let userDao;
let prodDao;
let persistence = process.argv[2];

switch (persistence) {
    case 'file':
        userDao = UserDaoFS
        prodDao = ProductDaoFS
        console.log(persistence);
        break;
    case 'mongo':
        await initMongoDB();
        userDao = UserDaoMongo
        prodDao = ProductDaoMongo;
        console.log(persistence);
        break;
    default:  
        userDao = UserDaoFS;
        prodDao = ProductDaoFS;
        persistence = 'file'
        console.log(persistence);
        break; 
};

export default { prodDao, userDao };