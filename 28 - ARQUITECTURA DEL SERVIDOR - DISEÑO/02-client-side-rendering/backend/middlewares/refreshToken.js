import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const refreshToken = async(req, res)=>{
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await UserModel.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded)=> {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const username = user[0].username;
            const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN, {
                expiresIn: '15s'
            });
            res.json({accessToken})
        })
    } catch (error) {
        console.log(error)
    }
}