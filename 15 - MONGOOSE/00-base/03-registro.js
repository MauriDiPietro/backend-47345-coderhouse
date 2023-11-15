import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const createUser = async (user) => {
  await UserModel.create(user);
};

const test = async () => {
  try {
    await initMongoDB();

    const newUser = {
      firstname: "Alberto",
      lastname: "Gomez",
      age: 35,
    };

    await createUser(newUser);
    console.log("Usuario creado");
  } catch (error) {
    console.log(error);
  }
};

test();
