const request = require("supertest");
const app = require("./index");

describe("API Tests", () => {
  test("GET /health should return status ok", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /users should return users list", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { id: 1, name: "Ahmad" },
      { id: 2, name: "Sara" }
    ]);
  });
});