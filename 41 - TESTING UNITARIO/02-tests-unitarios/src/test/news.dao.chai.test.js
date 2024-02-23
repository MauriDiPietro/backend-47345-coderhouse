import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import { expect } from "chai";
import mongoose from "mongoose";
import { logger } from "../logs/news.logs.js";

describe("Test unitarios de Dao News", () => {
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

  it("deberia retornar todas las noticias", async () => {
    const docs = await newsDao.getAllNews();
    expect(Array.isArray(docs)).to.be.equal(true);
    expect(docs.length === 0).to.be.equal(true);
    expect(docs).to.have.length(0);
  });

  it("deberia agregar una noticia", async () => {
    const doc = {
      title: "Llueve",
      body: "Chau mosquitos",
      author: "Jalu",
      image: "...",
    };
    const response = await newsDao.createNew(doc);
    const docs = await newsDao.getAllNews();

    expect(response).to.have.property("_id");
    expect(response.title).to.be.equal(doc.title);
    expect(typeof doc.body === "string").to.be.equal(true);
    expect(docs).to.have.length(1);
  });

  it("Debería encontrar un documento en una búsqueda por id", async () => {
    const doc = {
      title: "Llueve2",
      body: "Chau mosquitos2",
      author: "Jalu2",
      image: "...",
    };
    const response = await newsDao.createNew(doc);
    const responseIdString = response._id.toString();
    const docNew = await newsDao.getNew(response._id);
    expect(docNew._id.toString()).to.equal(responseIdString);
  });

  it("Debería actualizar un documento", async () => {
    const doc = {
      title: "Llueve3",
      body: "Chau mosquitos3",
      author: "Jalu3",
      image: "...",
    };
    const doc2 = {
      title: "actualizado",
      body: "se actualizó desde el test",
      author: "Juan Chai",
      image: "...",
    };
    const response = await newsDao.createNew(doc);
    const docNew = await newsDao.getNew(response._id);
    const docUpd = await newsDao.updateNew(docNew, doc2);
    expect(docUpd.title).to.be.equal(doc2.title);
    expect(docUpd.body).to.be.equal(doc2.body);
    expect(docUpd.author).to.be.equal(doc2.author);
  });

  it("Debería eliminar un documento", async () => {
    const doc = {
      title: "Llueve4",
      body: "Chau mosquitos4",
      author: "Jalu4",
      image: "...",
    };
    const response = await newsDao.createNew(doc);
    const docDel = await newsDao.deleteNew(response._id);
    expect(docDel._id.toString()).to.be.equal(response._id.toString());
    expect(docDel.title).to.be.equal(doc.title);
    expect(docDel.body).to.be.equal(doc.body);
    expect(docDel.author).to.be.equal(doc.author);
  });
});
