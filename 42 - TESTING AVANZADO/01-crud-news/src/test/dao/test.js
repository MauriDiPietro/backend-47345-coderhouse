import DaoMongo from '../../persistence/DAOS/mongo/news.mongo.dao.js';
import test from 'node:test'; 
import assert from 'node:assert';
import mongoose from 'mongoose';
import { fakerES as faker } from "@faker-js/faker";
import { logger } from '../../logs/news.logs.js';

    const newsDao = new DaoMongo();
    DaoMongo.init();
    await mongoose.connection.collections['news'].drop();
    logger.info('se limpió base de datos');

  const doc = {
    title: faker.person.jobTitle(),
    body: faker.hacker.phrase(),
    author: faker.person.fullName(),
    image: faker.image.url()
};

  test('Debería retornar todas las noticias de la colección news', async()=>{
    const result = await newsDao.getAllNews();
    assert.equal(Array.isArray(result), true);
    assert.equal(result.length === 0, true);
    // assert.equal(result).to.have.length(0);
  });
  test('Debería agregar una noticia a la colección news', async()=>{
 
    const result = await newsDao.createNew(doc);
    const collection = await newsDao.getAllNews();
    assert.ok(result, '_id');  
    assert.equal(result.title, doc.title);
    assert(typeof doc.body === 'string', true);
    assert.equal(collection.length, 1);
  });

  test('Debería encontrar un documento en una búsqueda por id', async()=>{

    const response = await newsDao.createNew(doc);
    const responseIdString = response._id.toString();
    const docNew = await newsDao.getNew(response._id);
    assert.equal(docNew._id.toString(), responseIdString);
  });
  
  test('Debería actualizar un documento', async()=>{
    const doc2 = {
        title: "actualizado",
        body: "se actualizó desde el test",
        author: "Juan Node",
        image: "...",
    };
    const response = await newsDao.createNew(doc);
    const docNew = await newsDao.getNew(response._id);
    const docUpd = await newsDao.updateNew(docNew, doc2);
    assert.equal(docUpd.title, doc2.title);
    assert.equal(docUpd.body, doc2.body);
    assert.equal(docUpd.author, doc2.author);
  });
  

  test('Debería eliminar un documento', async()=>{
    const response = await newsDao.createNew(doc);
    const docDel = await newsDao.deleteNew(response._id);
    assert.equal(docDel._id.toString(),response._id.toString());
    assert.equal(docDel.title, doc.title);
    assert.equal(docDel.body, doc.body);
    assert.equal(docDel.author, doc.author);
  })

