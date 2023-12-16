import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {

    res.send("Api user");
    
})

router.post("/", (req, res) => {

    res.send("Api user");
    
})

router.put("/:id", (req, res) => {

    res.send("Api user");
    
})

router.delete("/:id", (req, res) => {

    res.send("Api user");
    
})

export default router;