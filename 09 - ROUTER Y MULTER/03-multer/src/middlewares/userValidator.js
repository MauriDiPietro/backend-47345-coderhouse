export const userValidator = (req, res, next) => {
    const user = req.body;
    if(user.role !== 'admin') res.status(401).send('No autorizado')
    else next()
}