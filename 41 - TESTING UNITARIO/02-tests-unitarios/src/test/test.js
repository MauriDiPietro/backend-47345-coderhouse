import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import mongoose from "mongoose";
import { logger } from "../logs/news.logs.js";
import assert from "node:assert";
import test from "node:test";
import { fakerES as faker } from "@faker-js/faker";

const newsDao = new DaoMongo();
DaoMongo.init();
await mongoose.connection.collections["news"].drop();
logger.info("se limpió la colección news");

const doc = {
  title: faker.person.jobTitle(),
  body: faker.hacker.phrase(),
  author: faker.person.fullName(),
  image: faker.image.url(),
};

test("deberia retornar todas las noticias", async () => {
  const docs = await newsDao.getAllNews();
  assert.equal(Array.isArray(docs), true);
  assert.equal(docs.length === 0, true);
});

test("deberia agregar una noticia", async () => {
  const response = await newsDao.createNew(doc);
  assert.ok(response._id);
  assert.equal(response.title, doc.title);
});
