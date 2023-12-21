import { MeasurementsRepository } from "@/repositories/measurements-repository"
import { Measure } from "@prisma/client"

interface CreateMeasureUseCaseRequest {
  measure: number
}

interface CreateMeasureUseCaseResponse {
  measured: Measure
}

export class CreateMeasureUseCase {
  constructor(private measurementsRepository: MeasurementsRepository) {}

  async execute({
    measure,
  }: CreateMeasureUseCaseRequest): Promise<CreateMeasureUseCaseResponse> {
    const measured = await this.measurementsRepository.create({
      measure,
    })

    return {
      measured,
    }
  }
}
