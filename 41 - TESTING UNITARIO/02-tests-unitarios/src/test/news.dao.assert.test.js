import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import mongoose from "mongoose";
import { logger } from "../logs/news.logs.js";
import assert from "assert";

describe('Tests unitarios de dao news', ()=>{
    let newsDao;
  before(async () => {
    newsDao = new DaoMongo();
    DaoMongo.init();
    await mongoose.connection.collections["news"].drop();
    logger.info("se limpió la colección news");
  });

  after(() => {
    logger.info("finalizaron las pruebas");
  });

  it('deberia retornar todas las noticias', async()=>{
    const docs = await newsDao.getAllNews();
    assert.equal(Array.isArray(docs), true);
    assert.equal(docs.length === 0, true);
  })

  it('deberia agregar una noticia', async()=>{
    const doc = {
        title: "Llueve",
        body: "Chau mosquitos",
        author: "Jalu",
        image: "...",
      };
      const response = await newsDao.createNew(doc);
      assert.ok(response._id);
      assert.equal(response.title, doc.title);
  })
})
