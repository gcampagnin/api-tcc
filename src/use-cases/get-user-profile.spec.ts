import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { hash } from "bcryptjs"
import { expect, describe, it, beforeEach } from "vitest"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"
import { GetUserProfileUseCase } from "./get-user-profile"

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe("Get User Profile Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it("should be able a get user profile", async () => {
    const createdUser = await usersRepository.create({
      name: "Test",
      email: "test@test.com",
      password_hash: await hash("123456", 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual("Test")
  })

  it("should not be able to get user profile with wrong id", async () => {
    await expect(() =>
      sut.execute({
        userId: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
