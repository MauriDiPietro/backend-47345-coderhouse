export const isAuth = (req,res,next) => {
    console.log(req.session.passport.user);
    console.log('isAuth: ', req.isAuthenticated());
    if(req.isAuthenticated()) return next();
    res.status(401).send({ msg: 'Unauthorized' })
}