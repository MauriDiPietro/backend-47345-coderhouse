import UserModel from '../models/user.model.js';

export const checkDuplicateUsernameOrEmail = (req, res, next) => {
    UserModel.findOne({
        where: {
            username: req.body.username
        }
    }, async (err, user)=>{
        if(err) throw err;
        if(user) res.send('user already exists')
    });
    return
    
}