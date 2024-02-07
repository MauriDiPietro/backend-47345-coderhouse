import { faker } from "@faker-js/faker";
faker.locale = "es"

export const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.imageUrl(),
  };
};

