import request from "supertest"
import { app } from "@/app"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

describe("Create Measure (e2e)", () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("should be able to create a measure", async () => {
    const response = await request(app.server).post("/measurements").send({
      measure: 10.7,
    })

    expect(response.statusCode).toEqual(201)
  })
})
