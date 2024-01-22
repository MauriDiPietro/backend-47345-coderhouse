import * as userService from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const { cant } = req.query;
    const response = await userService.createUsersMock(cant);
    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
