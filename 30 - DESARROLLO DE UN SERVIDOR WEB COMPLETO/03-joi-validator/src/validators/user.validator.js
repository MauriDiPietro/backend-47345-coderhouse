//npm i joi

import Joi from "joi";

const registerSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  age: Joi.number(),
  password: Joi.string().alphanum().min(8).max(30)
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

export const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  error ? res.status(404).send(error) : next();
};
