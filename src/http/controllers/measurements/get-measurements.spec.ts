import request from "supertest"
import { app } from "@/app"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

describe("Get Measurements (e2e)", () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("should be able to get all measurements", async () => {
    await request(app.server).post("/measurements").send({
      measure: 10.7,
    })

    await request(app.server).post("/measurements").send({
      measure: 20.7,
    })

    const response = await request(app.server).get("/measurements").send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.measurements).toHaveLength(2)
  })
})
