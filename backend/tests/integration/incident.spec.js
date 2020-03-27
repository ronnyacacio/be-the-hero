const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Incident", () => {

  beforeEach( async () => {
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it("should be able to create a new incident", async () => {
    const response = await request(app)
    .post("/incidents")
    .set("authorization", "050714b7")
    .send({
      title: "Cachorro atropelado em Pentecoste-CE",
      description: "BÇABÇABÇABÇABAÇBA",
      value: 200
    });

    expect(response.body).toHaveProperty('id');
  });
});
