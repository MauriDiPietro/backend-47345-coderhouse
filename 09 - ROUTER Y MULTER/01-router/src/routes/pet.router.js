import { Router } from "express";
const router = Router();

import { PetManager } from "../managers/pets.manager.js";
const petManager = new PetManager("./src/data/pets.json");

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const pets = await petManager.getPets();
    if (!limit) res.status(200).json(pets);
    else {
      const petsByLimit = await petManager.getPetsByLimit(limit);
      res.status(200).json(petsByLimit);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const petCreated = await petManager.createPet(req.body);
    res.status(200).json(petCreated);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
