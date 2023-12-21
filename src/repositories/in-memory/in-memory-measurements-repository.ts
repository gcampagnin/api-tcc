import { Measure, Prisma } from "@prisma/client"
import { MeasurementsRepository } from "../measurements-repository"
import { randomUUID } from "node:crypto"

export class InMemoryMeasurementsRepository implements MeasurementsRepository {
  public items: Measure[] = []

  async findAllMeasurements() {
    const measurements = this.items

    return measurements
  }

  async create(data: Prisma.MeasureCreateInput) {
    const measure = {
      id: data.id ?? randomUUID(),
      measure: data.measure,
      created_at: new Date(),
    }

    this.items.push(measure)

    return measure
  }
}
