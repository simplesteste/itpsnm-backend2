import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateEnrollmentUseCase } from '@/use-cases/factories/update-enrollment-use-case';
import { EnrollementState } from '@prisma/client';
import { StudentNotFoundError } from '@/use-cases/errors/student-not-found';
import { CourseNotFoundError } from '@/use-cases/errors/course-not-found';
import { LevelNotFoundError } from '@/use-cases/errors/level-not-found';
import { EnrollmentNotFoundError } from '@/use-cases/errors/enrollment-not-found';
import { IdentityCardNumberNotExistsError } from '@/use-cases/errors/id-card-not-exists-error';
import { IdentityCardNumberHasInUseExistsError } from '@/use-cases/errors/id-card-already-in-use-error';
import { ClassNotExists } from '@/use-cases/errors/class-not-exists-error';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const createEnrollmentSchema = z.object({
    identityCardNumber: z.string().optional(),
    courseId: z.number().optional(),
    levelId: z.number().optional(),
    docsState: z.nativeEnum(EnrollementState).optional(),
    paymentState: z.nativeEnum(EnrollementState).optional(),
    classeId: z.number().optional(),
  });


  try {
    const { id } = request.params as { id: number };
    const {
      identityCardNumber,
      courseId,
      docsState,
      paymentState,
      classeId,
      levelId,
    } = createEnrollmentSchema.parse(request.body);

    const updateEnrollmentUseCase = makeUpdateEnrollmentUseCase();
    const enrollment = await updateEnrollmentUseCase.execute({
      id: Number(id),
      identityCardNumber,
      classeId,
      courseId,
      docsState,
      levelId,
      paymentState
    });

    return reply.status(200).send(enrollment);
  } catch (err) {
    console.log(err)
    if (err instanceof LevelNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    if (err instanceof StudentNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    if (err instanceof CourseNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    if (err instanceof LevelNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    if (err instanceof EnrollmentNotFoundError) {
      return reply.status(409).send({ message: err.message });
    }
    if (err instanceof IdentityCardNumberHasInUseExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    if (err instanceof IdentityCardNumberNotExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    if (err instanceof ClassNotExists) {
      return reply.status(409).send({ message: err.message });
    }

    return reply.status(500).send({ error: err });
  }
}
