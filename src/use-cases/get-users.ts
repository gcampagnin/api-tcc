import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@prisma/client"

interface GetUsersUseCaseResponse {
  users: User[]
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const users = await this.usersRepository.findAllUsers()

    return {
      users,
    }
  }
}
