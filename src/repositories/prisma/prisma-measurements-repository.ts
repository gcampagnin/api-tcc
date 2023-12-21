import { Measure, Prisma } from "@prisma/client"
import { MeasurementsRepository } from "../measurements-repository"
import { prisma } from "@/lib/prisma"

export class PrismaMeasurementsRepository implements MeasurementsRepository {
  async findAllMeasurements() {
    const measurements = await prisma.measure.findMany()

    return measurements
  }
  async create(data: Prisma.MeasureCreateInput) {
    const measure = await prisma.measure.create({
      data,
    })

    return measure
  }
}
