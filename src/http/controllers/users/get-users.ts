import { makeGetUsersUseCase } from "@/use-cases/factories/make-get-users-use-case"
import { FastifyReply, FastifyRequest } from "fastify"

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const getUsersUseCase = makeGetUsersUseCase()

  const { users } = await getUsersUseCase.execute()

  return reply.status(200).send({
    users,
  })
}
