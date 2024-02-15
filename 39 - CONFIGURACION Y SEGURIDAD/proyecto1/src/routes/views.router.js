import { Router } from "express";

const router = Router();

//! REPETIDO EN CONTROLLERS
router.get('/',(req,res)=>{
    res.render('register');
})

export default router;