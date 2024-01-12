//npm i express-validator

import { check, validationResult } from "express-validator";

export const validateRegister = [
  check("first_name", "Debes insertar un valor en el campo first_name")
    .exists()
    .not()
    .isEmpty(),
  check("last_name", "Debes insertar un valor en el campo last_name")
    .exists()
    .not()
    .isEmpty(),
  check("email", "Debes insertar un email válido").exists().isEmail(),
  check("password", "la contraseña debe cumplir con el mínimo de caracteres")
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 8 }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(404).send(error);
    }
  },
];
