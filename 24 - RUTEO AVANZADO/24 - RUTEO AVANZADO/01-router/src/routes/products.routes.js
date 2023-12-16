import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {

    res.send("Api products");
    
})

router.post("/", (req, res) => {

    res.send("Api products");
    
})

router.put("/:id", (req, res) => {

    res.send("Api products");
    
})

router.delete("/:id", (req, res) => {

    res.send("Api products");
    
})

export default router;