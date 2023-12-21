import { Measure, Prisma } from "@prisma/client"

export interface MeasurementsRepository {
  findAllMeasurements(): Promise<Measure[]>
  create(data: Prisma.MeasureCreateInput): Promise<Measure>
}
