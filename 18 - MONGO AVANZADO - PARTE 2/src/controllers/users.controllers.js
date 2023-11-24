import * as service from "../services/users.services.js";

export const aggregation1 = async(req,res,next) =>{
  try {
    const { gender } = req.query;
    const response = await service.aggregation1(gender);
    res.json(response);
  } catch (error) {
    next(error)
  }
}

export const aggregation2 = async(req,res,next) =>{
  try {
    const response = await service.aggregation2();
    res.json(response);
  } catch (error) {
    next(error)
  }
}

export const updateManyAge = async(req,res,next) =>{
  try {
    const response = await service.updateManyAge();
    res.json(response);
  } catch (error) {
    next(error)
  }
}

export const createFileCtr = async (req, res, next) => {
  try {
    const newUsers = await service.createFileUser();
    if (!newUsers) throw new Error("Validation Error!");
    else res.json(newUsers);
  } catch (error) {
    next(error);
  }
};

export const getByNameCtr = async (req, res, next) => {
  try {
    const { name } = req.query;
    const item = await service.getByNameUser(name);
    if (!item) throw new Error("User not found!");
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getByIdCtr = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getByIdUser(id);
    if (!item) throw new Error("User not found!");

    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getByEmailCtr = async (req, res, next) => {
  try {
    const { email } = req.params;
    const item = await service.getByEmailUser(email);
    if (!item) throw new Error("User not found!");
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getAllCtr = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await service.getAllUsers(page, limit);
    res.json(response);
    // const next = response.hasNextPage ? `http://localhost:8080/users/all?page=${response.nextPage}` : null;
    // const prev = response.hasPrevPage ? `http://localhost:8080/users/all?page=${response.prevPage}` : null;
    // res.json({
    //   payload: response.docs,
    //   info: {
    //     count: response.totalDocs,
    //     pages: response.totalPages,
    //     next,
    //     prev
    //   }
    // })
  } catch (error) {
    next(error);
  }
};

export const createCtr = async (req, res, next) => {
  try {
    const user = { ...req.body };
    const newUser = await service.createUser(user);
    if (!newUser) throw new Error("Validation Error!");
    else
      res.json({
        data: newUser,
      });
  } catch (error) {
    next(error);
  }
};

export const updateCtr = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    let item = await getByIdUser(id);

    if (!item) throw new Error("User not found!");

    const userUpdated = await service.updateUser(id, {
      name,
      description,
      price,
      stock,
    });

    res.json({
      msg: "User updated",
      data: userUpdated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCtr = async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteUser(id);

    res.json({
      msg: "User deleted",
    });
  } catch (error) {
    next(error);
  }
};
