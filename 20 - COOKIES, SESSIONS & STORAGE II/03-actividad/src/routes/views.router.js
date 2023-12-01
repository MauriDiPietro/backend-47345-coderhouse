import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.render('login')
})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/profile', (req, res)=>{
    res.render('profile')
})

router.get('/register-error', (req, res)=>{
    res.render('register-error')
})

export default router;