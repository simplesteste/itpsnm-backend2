import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import { coursesRoutes } from './http/controllers/courses/routes'
import { studentsRoutes } from './http/controllers/students/routes'
import { enrollmentsRoutes } from './http/controllers/enrollments/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)
app.register(coursesRoutes)
app.register(studentsRoutes)
app.register(enrollmentsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }
  console.log(error)
  return reply.status(500).send({ message: 'Internal server error.' })
})
