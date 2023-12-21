import { FastifyInstance } from "fastify"

import { create } from "./create"
import { getMeasurements } from "./get-measurements"

export async function measurementsRoutes(app: FastifyInstance) {
  app.post("/measurements", create)
  app.get("/measurements", getMeasurements)
}
