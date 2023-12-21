import { InMemoryMeasurementsRepository } from "@/repositories/in-memory/in-memory-measurements-repository"
import { CreateMeasureUseCase } from "./create-measure"
import { beforeEach, describe, expect, it } from "vitest"

let measurementsRepository: InMemoryMeasurementsRepository
let sut: CreateMeasureUseCase

describe("Measure Use Case", () => {
  beforeEach(() => {
    measurementsRepository = new InMemoryMeasurementsRepository()
    sut = new CreateMeasureUseCase(measurementsRepository)
  })

  it("should be able a create measure", async () => {
    const { measured } = await sut.execute({
      measure: 10.7,
    })

    expect(measured.id).toEqual(expect.any(String))
  })
})
