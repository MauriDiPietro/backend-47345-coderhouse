import express from "express";
import * as newsController from "../controllers/news.controllers.js";

const router = express.Router();

router.get("/", newsController.getAllNewsCtr);
router.get("/:id", newsController.getNewCtr);
router.post("/", newsController.createNewCtr);
router.put('/:id', newsController.updateNewCtr);
router.delete('/', newsController.deleteAllNews);
router.delete('/id/:id', newsController.deleteNewCtr);

export default router;