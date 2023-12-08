import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const register = async(req, res, next)=>{
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const exist = await userDao.getByEmail(email);
        if(exist) return res.status(400).json({ msg: 'User already exists' });
        const user = {first_name, last_name, email, age, password}
        const newUser = await userDao.createUser(user);
        res.json({
            msg: 'Register OK'
        })
    } catch (error) {
        next(error);
    }
};

export const login = async(req, res, next)=>{
    try {
       const { email, password } = req.body;
       const user = await userDao.loginUser({email, password});
       if(!user) res.json({msg: 'invalid credentials'});
    } catch (error) {
        next(error);
    }
}

