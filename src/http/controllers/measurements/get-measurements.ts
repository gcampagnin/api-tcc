import { makeGetMeasurementsUseCase } from "@/use-cases/factories/make-get-measurements-use-case"
import { FastifyReply, FastifyRequest } from "fastify"

export async function getMeasurements(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getMeasuremetsUseCase = makeGetMeasurementsUseCase()

  const { measurements } = await getMeasuremetsUseCase.execute()

  return reply.status(200).send({
    measurements,
  })
}
