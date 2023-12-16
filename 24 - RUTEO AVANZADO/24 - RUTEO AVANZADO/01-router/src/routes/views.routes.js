import { Router } from "express";


const router = Router();

router.get("/", (req, res) => {
 
    res.send("Vista de rutas");
})

router.get("/profile", (req, res) => {
 
    res.send("Perfil de usuario");
})

router.get("/login", (req, res) => {
 
    res.send("Login de usuario");
})


export default router;