// import express from "express";
// const router = express.Router();

import { Router } from "express";
const router = Router();

import { UserManager } from "../managers/user.manager.js";
const userManager = new UserManager("./src/data/users.json");

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const users = await userManager.getUsers();
    if (!limit) res.status(200).json(users);
    else {
      const usersByLimit = await userManager.getUsersByLimit(limit);
      res.status(200).json(usersByLimit);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const userCreated = await userManager.createUser(req.body);
    const userResponse = {
      id: userCreated.id,
      firstname: userCreated.firstname,
      lastname: userCreated.lastname,
      username: userCreated.username,
    };
    res.status(200).json(userResponse);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getUserById(Number(id));
    if (!user) res.status(404).json({ message: "User not found" });
    else res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = { ...req.body };
    // console.log('user', user);
    const { id } = req.params;
    const idNumber = Number(id);
    const userOk = await userManager.getUserById(idNumber);
    if (!userOk) res.status(404).json({ message: "User not found" });
    else await userManager.updateUser(user, idNumber);
    res.status(200).json({ message: `User id: ${id} updated` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idNumber = Number(id);
    await userManager.deleteUser(idNumber);
    res.json({ message: `User id: ${idNumber} deleted` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
