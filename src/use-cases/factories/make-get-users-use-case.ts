import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { GetUserUseCase } from "../get-users"

export function makeGetUsersUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new GetUserUseCase(usersRepository)

  return useCase
}
