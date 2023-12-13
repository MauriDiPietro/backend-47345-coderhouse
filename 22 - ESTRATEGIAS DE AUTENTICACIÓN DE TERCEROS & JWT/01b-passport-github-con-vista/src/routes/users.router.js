import { Router } from 'express'
import passport from 'passport';
import { registerResponse, loginResponse, githubResponse } from '../controllers/user.controller.js';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);

/* ------------------------------------ - ----------------------------------- */

router.get('/register-github', passport.authenticate('github', { scope: [ 'user:email' ] }))  

//callbackURL --> es la ruta a la que redirecciona github
router.get('/github', passport.authenticate( 'github' , {
    failureRedirect: '/login', 
    successRedirect: '/profile', 
    passReqToCallback: true
}));

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
          console.error('Error al cerrar sesión:', err);
          return res.send(err); 
        }
        res.redirect('/login'); // Redirige a la página de inicio u otra ubicación después del logout exitoso
      });
});

export default router;

