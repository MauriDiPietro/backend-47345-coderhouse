import { UserModel } from "../models/user.model.js";
import { generateUser } from "../utils/user.utils.js";

export const createUsersMock = async (cant = 50) => {
  try {
    const usersArray = [];
    for (let i = 0; i < cant; i++) {
      const user = generateUser();
      usersArray.push(user);
    }
    const users = await UserModel.create(usersArray);
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await UserModel.find({});
  } catch (error) {
    console.log(error);
  }
};
