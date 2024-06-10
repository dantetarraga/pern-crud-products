import request from "supertest";
import server from "../server";

describe("GET /api/products", () => {
  it("should return 200 OK", async () => {
    const response = await request(server).get("/api/products");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );

    expect(response.body).not.toBe(404);
  });
});

describe("POST /api/products", () => {
  it("should return 201 Created", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Test Product",
      price: 100,
      description: "Test Description",
      available: true,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");

    expect(response.body).not.toBe(500);
  });

  it("should validate that the price is greater than 0", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Test Product",
      price: -2,
      description: "Test Description",
      available: true,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(1);
  });
});
