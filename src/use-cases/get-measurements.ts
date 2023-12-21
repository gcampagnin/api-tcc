import { MeasurementsRepository } from "@/repositories/measurements-repository"
import { Measure } from "@prisma/client"

interface GetUsersUseCaseResponse {
  measurements: Measure[]
}

export class GetMeasurementsUseCase {
  constructor(private measurementsRepository: MeasurementsRepository) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const measurements = await this.measurementsRepository.findAllMeasurements()

    return {
      measurements,
    }
  }
}
