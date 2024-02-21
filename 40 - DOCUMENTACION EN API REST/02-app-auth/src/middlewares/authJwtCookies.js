import jwt from "jsonwebtoken";
import factory from "../persistence/daos/factory.js";
const { userDao } = factory;
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY_JWT;

/**
 * Middleware que verifica si el token es válido a través de la cookie "token"
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const checkAuthCookie = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "Unauthorized" });

    const decode = jwt.verify(token, SECRET_KEY);
    // console.log('TOKEN DECODIFICADO');
    console.log(decode);
    const user = await userDao.getById(decode.userId);
    if (!user) return res.status(400).json({ msg: "Unauthorized" });
    /* ------------------------------------ - ----------------------------------- */
    // Verificar si el token está a punto de expirar
    const now = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
    const tokenExp = decode.exp; // Tiempo de expiración del token
    const timeUntilExp = tokenExp - now; // Tiempo hasta la expiración en segundos

    if (timeUntilExp <= 300) {
      // 300 segundos = 5 minutos
      // Generar un nuevo token con un tiempo de expiración renovado
      const newToken = userDao.generateToken(user, '15m');
      console.log('>>>>>>SE REFRESCÓ EL TOKEN')
      res.clearCookie('token');
      res.cookie('token', access_token, { httpOnly: true })
    }

    /* ------------------------------------ - ----------------------------------- */
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

