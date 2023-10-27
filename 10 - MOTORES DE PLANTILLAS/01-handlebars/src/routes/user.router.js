import { Router } from "express";
const router = Router();
import fs from 'fs'
const path = './users.json';

let users = [];

router.post('/', async (req, res)=>{
    const user = req.body;
    console.log(req.body);
    if(fs.existsSync(path)){
        const usersJSON = await fs.promises.readFile(path, 'utf-8');
        users = JSON.parse(usersJSON);
    }
    users.push(user);
    await fs.promises.writeFile(path, JSON.stringify(users));
    res.redirect('/users');
});

export default router;