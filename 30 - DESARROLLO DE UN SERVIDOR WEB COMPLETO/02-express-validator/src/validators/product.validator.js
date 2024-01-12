import { param, validationResult } from "express-validator";

export const validateProduct = [
  param("id", "Debes insertar un id con mas de 5 caracteres").isLength({
    min: 5,
  }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(404).send(error);
    }
  },
];
