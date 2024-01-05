import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
        req.username = decoded.username
        next();
    });
};