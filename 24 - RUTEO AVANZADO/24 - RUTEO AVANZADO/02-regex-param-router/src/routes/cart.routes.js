import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {

    res.send("Api cart");
    
})

router.post("/", (req, res) => {

    res.send("Api cart");
    
})

router.put("/:id", (req, res) => {

    res.send("Api cart");
    
})

router.delete("/:id", (req, res) => {

    res.send("Api cart");
    
})

export default router;