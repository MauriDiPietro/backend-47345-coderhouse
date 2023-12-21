import { dirname } from "path";
import { fileURLToPath } from "url";
export const __dirname = dirname(fileURLToPath(import.meta.url));

import bcryptjs from "bcryptjs";

export const createHash = (password) =>
  bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

export const isValidPassword = (user, password) =>
  bcryptjs.compareSync(password, user.password);

export const createResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({ data });
};
