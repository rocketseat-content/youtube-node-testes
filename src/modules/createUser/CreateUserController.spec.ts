/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../../app";
import request from "supertest";

describe("Create User Controller", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      username: "test-integration",
      email: "testIntegration@test.com.br",
      name: "Test Integration",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create an existing user", async () => {
    await request(app).post("/users").send({
      username: "test-integration-exist",
      email: "testIntegrationExisting@test.com.br",
      name: "Test Integration Exist User",
    });

    const response = await request(app).post("/users").send({
      username: "test-integration-exist",
      email: "testIntegrationExisting@test.com.br",
      name: "Test Integration Exist User",
    });

    expect(response.status).toBe(400);
  });
});
