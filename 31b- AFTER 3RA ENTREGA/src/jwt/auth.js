import jwt from "jsonwebtoken";

export const PRIVATE_KEY = "1234";

export const generateToken = (user) => {
  const payload = {
    userId: user._id,
  };

  const token = jwt.sign(payload, PRIVATE_KEY, {
    expiresIn: "20m",
  });

  return token;
};
