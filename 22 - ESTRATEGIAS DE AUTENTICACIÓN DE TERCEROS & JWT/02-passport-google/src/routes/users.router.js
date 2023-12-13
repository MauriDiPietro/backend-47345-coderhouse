import { Router } from 'express'
import passport from 'passport';
import { registerResponse, loginResponse, githubResponse, googleResponse } from '../controllers/user.controller.js';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);

router.get('/register-github', passport.authenticate('github', { scope: [ 'user:email' ] }))  

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }), githubResponse)

/* ------------------------------------ - ----------------------------------- */

router.get("/oauth2/redirect/accounts.google.com", passport.authenticate('google', { assignProperty: "user"}), googleResponse)

export default router;


