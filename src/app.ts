import fastifyJwt from "@fastify/jwt"
import fastifyCookie from "@fastify/cookie"
import fastify from "fastify"
import cors from "@fastify/cors"
import { ZodError } from "zod"
import { env } from "./env"
import { usersRoutes } from "./http/controllers/users/routes"
import { measurementsRoutes } from "./http/controllers/measurements/routes"

export const app = fastify()

app.register(cors, {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(measurementsRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() })
  }

  if (env.NODE_ENV !== "production") {
    console.error(error)
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." })
})
