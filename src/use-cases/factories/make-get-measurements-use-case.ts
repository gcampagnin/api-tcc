import { PrismaMeasurementsRepository } from "@/repositories/prisma/prisma-measurements-repository"
import { GetMeasurementsUseCase } from "../get-measurements"

export function makeGetMeasurementsUseCase() {
  const measurementsRepository = new PrismaMeasurementsRepository()
  const useCase = new GetMeasurementsUseCase(measurementsRepository)

  return useCase
}
