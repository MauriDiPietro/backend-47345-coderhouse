import { Router } from "express";
const router = Router();
import fs from 'fs'

const path = './users.json'

router.get('/', (req, res)=>{
    res.render('vista1')
});


router.get('/vista2', (req, res)=>{
    res.render('vista2')
});

router.get('/vista3', (req, res)=>{
    const user = {
        firstname: 'Juan',
        lastname: 'Perez'
    };
    res.render('vista3', user);
});

const users = [
    {
        firstname: 'Juan',
        lastname: 'Perez',
        age: 30,
        mail: 'juan@mail.com',
        phone: "65458942"
    },
    {
        firstname: 'Carlos',
        lastname: 'Perez',
        age: 30,
        mail: 'car@mail.com',
        phone: "6767676"
    },
    {
        firstname: 'Juana',
        lastname: 'Perez',
        age: 30,
        mail: 'juani@mail.com',
        phone: "6577"
    },
    {
        firstname: 'Ernestina',
        lastname: 'Perez',
        age: 30,
        mail: 'ernes@mail.com',
        phone: "43535"
    }
]

router.get('/actividad', (req, res)=>{
    const random = Math.floor(Math.random() * 4);
    const user = users[random];
    res.render('actividad', user);
});


router.get('/list', (req, res)=>{
    res.render('list', { users })
})

router.get('/form', (req, res)=>{
    res.render('formulario')
})

router.get('/users', async(req, res)=>{
    let usersJSON = await fs.promises.readFile(path, 'utf-8');
    let users = JSON.parse(usersJSON);
    res.render('users', { users })
})

export default router;