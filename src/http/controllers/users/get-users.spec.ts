import request from "supertest"
import { app } from "@/app"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

describe("Get Users (e2e)", () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("should be able to get all users", async () => {
    await request(app.server).post("/users").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    })

    await request(app.server).post("/users").send({
      name: "John Doe 2",
      email: "johndoe2@example.com",
      password: "123456",
    })

    const response = await request(app.server).get("/users").send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.users).toHaveLength(2)
  })
})
