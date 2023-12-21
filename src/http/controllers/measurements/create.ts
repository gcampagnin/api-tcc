import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { makeCreateMeasureUseCase } from "@/use-cases/factories/make-create-measure-use-case"

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createMeasureBodySchema = z.object({
    measure: z.number(),
  })

  const { measure } = createMeasureBodySchema.parse(request.body)

  const createMeasureUseCase = makeCreateMeasureUseCase()

  await createMeasureUseCase.execute({
    measure,
  })

  return reply.status(201).send()
}
