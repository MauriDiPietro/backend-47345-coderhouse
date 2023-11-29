import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.cookie(name, email, { maxAge: 15000 }).send("cookie agregada con exito");
});

export default router;
