import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {

    res.send("Api products");
    
})

router.post("/", (req, res, nex) => {
    // Middleware para verificar si es administrador
    const { email, password, rol } = req.body;
    if(rol !== "admin") {
       return res.status(403).json({msg: "Usuario no autorizado"});
    }

    nex();

} ,
(req, res) => {

    res.send("Api products");
    
})

router.put("/:id", (req, res) => {

    res.send("Api products");
    
})

router.delete("/:id", (req, res) => {

    res.send("Api products");
    
})

export default router;