import { dirname } from "path";
import { fileURLToPath } from "url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const getRandomNumber = () => {
  const random = Math.floor(Math.random() * 50);
  return random;
};
