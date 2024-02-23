import DaoMongo from "./mongo/news.mongo.dao.js";
import DaoFile from "./fs/news.file.dao.js";
import DaoMemory from "./mem/news.mem.dao.js";


// const selectedDAO = process.argv[2];
const selectedDAO = 'mongo';

let DAO = null;

switch(selectedDAO) {
    case 'mongo':
        DaoMongo.init(); 
        DAO = new DaoMongo();
        break;
    case "memory":
        DAO = new DaoFile('./src/persistence/DAOS/fs/db.json');
        break;
    default:
        DAO = new DaoMemory();
        break;
} 

export const getAllNews = async()=> {
    return await DAO.getAllNews()
  }
  
  export const getNew = async(id)=> {
    return await DAO.getNew(id)
  }
  
  export const createNew = async(obj) => {
    return await DAO.createNew(obj)
  }
  
  export const updateNew = async(id, body) => {
    return await DAO.updateNew(id, body)
  }
  
  export const deleteNew = async(id) => {
    return await DAO.deleteNew(id)
  }
  
  export const getDao = ()=> {
    return DAO;
  }