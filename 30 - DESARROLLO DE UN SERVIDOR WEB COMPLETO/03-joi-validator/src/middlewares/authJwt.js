import jwt from 'jsonwebtoken';
import factory from "../persistence/daos/factory.js";
const { userDao } = factory;
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY_JWT

/**
 * Middleware que verifica si el token es válido a través del header "Authorization"
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const checkAuth = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  // console.log('authHeader------------------', authHeader);
  if (!authHeader) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const token = authHeader.split(' ')[1];
    const decode = jwt.verify(
      token,
      SECRET_KEY
    );
    console.log('TOKEN DECODIFICADO');
    console.log(decode);
    const user = await userDao.getById(decode.userId);

    if (!user) return res.status(400).json({ msg: 'Unauthorized' });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};


