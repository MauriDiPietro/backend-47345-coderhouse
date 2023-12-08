import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.oidc.isAuthenticated())
    if(req.oidc.user){
        console.log(req.oidc.user)
    }
    res.json({
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
    })
});

export default router;