import { Router } from 'express'
import { register, login } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', checkAuth, (req, res)=>{
  const { first_name, last_name, email, role } = req.user;
  res.json({
    status: 'success',
    userData: {
      first_name, 
      last_name, 
      email, 
      role
    }
  })
})

export default router;
