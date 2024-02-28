import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";

describe("Conjunto de tests integrales", () => {
  beforeAll(async () => {
    await mongoose.connection.collections["news"].drop();
  });

  test("[POST] /news", async () => {
    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };
    const response = await request(app).post("/news").send(doc);
    // console.log('response-->', response.body);
    const id = response.body._id;
    const titleResponse = response.body.title;
    expect(id).toBeDefined();
    expect(response.body).toHaveProperty("_id");
    expect(titleResponse).toBe(doc.title);
    expect(response.body.body).toEqual(doc.body);
    expect(response.statusCode).toBe(200);
  });

  test("[GET] /news", async () => {
    const response = await request(app).get("/news");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body).toBeInstanceOf(Array);
    const dateResponse = response.body[0].date;
    const dateExpected = expect.stringContaining("2024");
    expect(dateResponse).toEqual(dateExpected);
  });

  test("[GET] /:id", async () => {
    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };
    const response = await request(app).post("/news").send(doc);
    const id = response.body._id;
    console.log(id);
    expect(id).toBeDefined();
    expect(response.body).toHaveProperty("_id");
    const responseGet = await request(app).get(`/news/${id}`);
    expect(responseGet.statusCode).toBe(200); 
    expect(responseGet.body.title).toEqual(doc.title);

    const idFaker = '10de7f1f3fd033f11d434acb'
    const responseGetFail = await request(app).get(`/news/${idFaker}`);
    const msgError = `No se encontró el id ${idFaker} en la base de datos.` 
    expect(responseGetFail.body.msg).toEqual(msgError);
    expect(responseGetFail.statusCode).toBe(404);
  });

  test("[PUT] /news/:id", async () => {
    const doc = {
        title: faker.person.jobTitle(),
        body: faker.hacker.phrase(),
        author: faker.person.fullName(),
        image: faker.image.url(),
      };
      const response = await request(app).post("/news").send(doc);
      const id = response.body._id;
      expect(id).toBeDefined();
      expect(response.body).toHaveProperty("_id");

      const doc2 = {
        title: 'title test',
        body: 'body test',
        author: 'author test',
        image: '....',
      };

      const responsePut = await request(app).put(`/news/${id}`).send(doc2);
      console.log('RESPONSEPUT', responsePut);
      expect(responsePut.statusCode).toBe(200);
      expect(responsePut.body._id).toBeDefined();
      expect(responsePut.body.title).toBe(doc2.title);

  });

  test("[DELETE] /news/:id", async () => {
    const doc = {
        title: faker.person.jobTitle(),
        body: faker.hacker.phrase(),
        author: faker.person.fullName(),
        image: faker.image.url(),
      };
      const response = await request(app).post("/news").send(doc);
      const id = response.body._id;
      expect(id).toBeDefined();
      expect(response.body).toHaveProperty("_id");

      const responseDel = await request(app).delete(`/news/id/${id}`)
      expect(responseDel.statusCode).toBe(200);

      const responseGetFail = await request(app).get(`/news/${id}`);
      const msgError = `No se encontró el id ${id} en la base de datos.` 
      expect(responseGetFail.body.msg).toEqual(msgError);
      expect(responseGetFail.statusCode).toBe(404);
  });
});
