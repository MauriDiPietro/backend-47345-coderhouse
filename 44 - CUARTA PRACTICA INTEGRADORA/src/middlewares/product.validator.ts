import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const prodSchemaPost = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10).max(50).required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
});

const prodSchemaGet = Joi.object({
  id: Joi.string().min(10).required(),
});

export const validatePostProd = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = prodSchemaPost.validate(req.body, { abortEarly: true });
  error ? res.status(404).send(error) : next();
};

export const validateGetProd = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = prodSchemaGet.validate(req.params, { abortEarly: true });
  error ? res.status(404).send(error) : next();
};
