import UserDaoMongoDB from "../daos/mongodb/user.dao.js";
import { isValidPassword } from "../utils.js";
const userDao = new UserDaoMongoDB();

export const getByIdUser = async (id) => {
  try {
    const user = await userDao.getById(id);
    if (!user) return false;
    else return user;
  } catch (error) {
    console.log(error);
  }
};

export const getByEmailUser = async (email) => {
  try {
    const user = await userDao.getByEmail(email);
    if (!user) return false;
    else return user;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) =>{
  try {
    const userExist = await getByEmailUser(email); 
    console.log('userExist', userExist);
    if(userExist){
      const passValid = isValidPassword(userExist, password)
      if(!passValid) return false
      else return userExist
    } return false
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const createUser = async (obj) => {
  try {
    const newUser = await userDao.create(obj);
    if (!newUser) throw new Error("Validation Error!");
    else return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, obj) => {
  try {
    let item = await userDao.getById(id);
    if (!item) {
      throw new Error("User not found!");
    } else {
      const userUpdated = await userDao.update(id, obj);
      return userUpdated;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const userDeleted = await userDao.delete(id);
    return userDeleted;
  } catch (error) {
    console.log(error);
  }
};
