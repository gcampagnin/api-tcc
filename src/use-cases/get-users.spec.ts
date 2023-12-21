import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { beforeEach, describe, expect, it } from "vitest"
import { GetUserUseCase } from "./get-users"
import { hash } from "bcryptjs"

let usersRepository: InMemoryUsersRepository
let sut: GetUserUseCase

describe("Get Measurements Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserUseCase(usersRepository)
  })

  it("should be able to get all users", async () => {
    await usersRepository.create({
      name: "Test",
      email: "test@test.com",
      password_hash: await hash("123456", 6),
    })

    await usersRepository.create({
      name: "Test 1",
      email: "test1@test.com",
      password_hash: await hash("123456", 6),
    })

    const { users } = await sut.execute()

    expect(users).toHaveLength(2)
  })
})
