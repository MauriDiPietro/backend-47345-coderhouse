import { describe, test } from "node:test";
import assert from "node:assert";
import { fakerES as faker } from "@faker-js/faker";

const doc = {
  title: faker.person.jobTitle(),
  body: faker.hacker.phrase(),
  author: faker.person.fullName(),
  image: faker.image.url(),
};

const apiURL = "http://localhost:8080/news";

describe("TESTS API NEWS", () => {
  test("[GET] /news", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });

    const response = await fetch(apiURL);
    const responseGet = await response.json();
    
    assert.strictEqual(Array.isArray(responseGet), true);
    assert.equal(responseGet.length === 0, true);

    const responseP = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await responseP.json();
    assert.ok(responsePost, "_id");
    const statusCode = responseP.status;
    assert.equal(statusCode, 200);

    const response2 = await fetch(apiURL);
    const responseGet2 = await response2.json();
    assert.equal(responseGet2.length, 1);
    const firstDoc = responseGet2[0];
    const titleExpected = doc.title;
    assert.equal(firstDoc.title, titleExpected);
    const dateResponse = responseGet2[0].date;
    assert.equal(dateResponse.includes("2024"), true);
  });

  test("[POST] /news", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responseAPI = await response.json();
    const id = responseAPI._id;
    const titleResponse = responseAPI.title;
    const titleExpected = doc.title;
    const bodyResponse = responseAPI.body;
    const bodyExpected = doc.body;
    const statusCode = response.status;
    assert.ok(responseAPI, "_id");
    assert.equal(typeof id, "string");
    assert.equal(titleResponse, titleExpected);
    assert.equal(bodyResponse, bodyExpected);
    assert.equal(statusCode, 200);
  });

  test("[GET] /news/:id", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;
    const responseGet = await fetch(`${apiURL}/${id}`);
    const statusCode = responseGet.status;
    const responseGetById = await responseGet.json();
    assert.equal(statusCode, 200);
    assert.equal(responseGetById.body, responsePost.body);
    const idFaker = "507f191e810c19729de860ea";
    const responseGetById2 = await fetch(`${apiURL}/${idFaker}`);
    const getByIdFail = await responseGetById2.json();
    const responseGetFail = getByIdFail.msg;
    const msgErrorApi = `No se encontró el id ${idFaker} en la base de datos.`;
    assert.equal(responseGetFail, msgErrorApi);
  });

  test("[UPDATE] news/:id", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;

    const doc2 = {
      title: "title test updated",
      body: "body test updated",
      author: "Gonzalo Bonadeo",
      image: "...",
    };
    const response2 = await fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc2),
    });
    const responsePut = await response2.json();
    assert.ok(responsePut, "_id");
    const statusCode = response2.status;
    assert.strictEqual(statusCode, 200);
    assert.strictEqual(responsePut.body, doc2.body);
  });

  test("[DELETE] news/:id", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;
    const response2 = await fetch(`${apiURL}/id/${id}`, { method: "DELETE" });
    const responseDel = await response2.json();
    assert.strictEqual(response2.status, 200);
    assert.strictEqual(responseDel.body, responsePost.body);
    const responseGet = await fetch(`${apiURL}/${id}`);
    const statusCode = responseGet.status;
    const responseGetById = await responseGet.json();
    assert.strictEqual(statusCode, 404);
    assert.strictEqual(
      responseGetById.msg,
      `No se encontró el id ${id} en la base de datos.`
    );
  });
});
