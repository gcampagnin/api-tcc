import { PrismaMeasurementsRepository } from "@/repositories/prisma/prisma-measurements-repository"
import { CreateMeasureUseCase } from "../create-measure"

export function makeCreateMeasureUseCase() {
  const measurementsRepository = new PrismaMeasurementsRepository()
  const useCase = new CreateMeasureUseCase(measurementsRepository)

  return useCase
}
