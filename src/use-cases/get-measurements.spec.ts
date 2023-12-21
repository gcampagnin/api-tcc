import { InMemoryMeasurementsRepository } from "@/repositories/in-memory/in-memory-measurements-repository"
import { beforeEach, describe, expect, it } from "vitest"
import { GetMeasurementsUseCase } from "./get-measurements"

let measurementsRepository: InMemoryMeasurementsRepository
let sut: GetMeasurementsUseCase

describe("Get Measurements Use Case", () => {
  beforeEach(() => {
    measurementsRepository = new InMemoryMeasurementsRepository()
    sut = new GetMeasurementsUseCase(measurementsRepository)
  })

  it("should be able to list all measurements", async () => {
    await measurementsRepository.create({
      measure: 10.7,
    })

    await measurementsRepository.create({
      measure: 20.7,
    })

    const { measurements } = await sut.execute()

    expect(measurements).toHaveLength(2)
  })
})
