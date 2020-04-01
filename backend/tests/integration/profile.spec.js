const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Profile", () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it("must be able to login", () => {
    const response = await request(app)
    .get("/profile")
    .set("authorization", "050714b7")

    expect(response.body);
  });
});
