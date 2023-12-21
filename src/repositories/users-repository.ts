import { Prisma, User } from "@prisma/client"

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findAllUsers(): Promise<User[]>
  create(data: Prisma.UserCreateInput): Promise<User>
}
