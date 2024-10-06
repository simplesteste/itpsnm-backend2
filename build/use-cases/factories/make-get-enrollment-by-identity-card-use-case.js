"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/use-cases/factories/make-get-enrollment-by-identity-card-use-case.ts
var make_get_enrollment_by_identity_card_use_case_exports = {};
__export(make_get_enrollment_by_identity_card_use_case_exports, {
  makeGetEnrollmentByIdentityCardUseCase: () => makeGetEnrollmentByIdentityCardUseCase
});
module.exports = __toCommonJS(make_get_enrollment_by_identity_card_use_case_exports);

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  JWT_SECRET: import_zod.z.string().optional(),
  PORT: import_zod.z.coerce.number().default(3333)
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}
var env = _env.data;

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query", "info", "warn", "error"] : []
});

// src/repositories/prisma/prisma-enrollments-repository.ts
var PrismaEnrollmentsRepository = class {
  async checkStatus(enrollmentId) {
    let enrollment = await prisma.enrollment.findUnique({
      where: {
        id: enrollmentId
      },
      include: {
        students: {
          select: {
            id: true,
            fullName: true,
            alternativePhone: true,
            dateOfBirth: true,
            emissionDate: true,
            gender: true,
            height: true,
            identityCardNumber: true,
            maritalStatus: true,
            type: true,
            mother: true,
            father: true,
            residence: true,
            phone: true,
            User: {
              select: {
                role: true,
                email: true,
                isActive: true,
                isBlocked: true
              }
            }
          }
        },
        classes: {
          select: {
            name: true,
            period: true,
            id: true,
            classrooms: true
          }
        },
        levels: {
          select: {
            id: true,
            name: true
          }
        },
        courses: {
          select: {
            id: true,
            name: true
          }
        },
        documents: {
          select: {
            id: true,
            File: true
          }
        }
      }
    });
    return enrollment;
  }
  async findByEnrollmentNumber(enrollmentId) {
    let enrollment = await prisma.enrollment.findUnique({
      where: {
        id: enrollmentId
      }
    });
    return enrollment;
  }
  async findByIdentityCardNumber(identityCardNumber) {
    let enrollment = await prisma.enrollment.findUnique({
      where: { identityCardNumber },
      include: {
        students: {
          select: {
            id: true,
            fullName: true,
            alternativePhone: true,
            dateOfBirth: true,
            emissionDate: true,
            gender: true,
            height: true,
            identityCardNumber: true,
            maritalStatus: true,
            type: true,
            mother: true,
            father: true,
            residence: true,
            phone: true,
            User: {
              select: {
                role: true,
                email: true,
                isActive: true,
                isBlocked: true
              }
            }
          }
        },
        classes: {
          select: {
            name: true,
            period: true,
            id: true,
            classrooms: true
          }
        },
        levels: {
          select: {
            id: true,
            name: true
          }
        },
        courses: {
          select: {
            id: true,
            name: true
          }
        },
        documents: {
          select: {
            id: true,
            File: true
          }
        }
      }
    });
    return enrollment;
  }
  async toggleStatus(enrollmentId, docsState, paymentState) {
    let enrollment = await prisma.enrollment.update({
      where: {
        id: enrollmentId
      },
      data: {
        docsState,
        paymentState
      }
    });
    return {
      ...enrollment,
      docsState: enrollment.docsState,
      paymentState: enrollment.paymentState
    };
  }
  async destroy(enrollmentId) {
    let isDeletedEnrollment = await prisma.enrollment.delete({
      where: {
        id: enrollmentId
      }
    });
    return isDeletedEnrollment ? true : false;
  }
  //TODO: Mudar o retorno de any
  async create(data) {
    let enrollment = await prisma.enrollment.create({
      data: {
        docsState: data.docsState,
        paymentState: data.paymentState,
        identityCardNumber: data.identityCardNumber,
        courseId: data.courseId,
        levelId: data.levelId,
        classeId: data.classeId
      }
    });
    return {
      ...enrollment,
      identityCardNumber: enrollment.identityCardNumber,
      levelId: enrollment.levelId,
      courseId: enrollment.courseId,
      classeId: enrollment.classeId
    };
  }
  async searchMany(paymentState, docsState, page) {
    let pageSize = 20;
    const totalItems = await prisma.enrollment.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    let enrollments = await prisma.enrollment.findMany({
      include: {
        students: {
          select: {
            id: true,
            fullName: true,
            alternativePhone: true,
            dateOfBirth: true,
            emissionDate: true,
            gender: true,
            height: true,
            identityCardNumber: true,
            maritalStatus: true,
            type: true,
            mother: true,
            father: true,
            residence: true,
            phone: true,
            User: {
              select: {
                role: true,
                email: true,
                isActive: true,
                isBlocked: true
              }
            }
          }
        },
        classes: {
          select: {
            name: true,
            period: true,
            id: true,
            classrooms: true
          }
        },
        levels: {
          select: {
            id: true,
            name: true
          }
        },
        courses: {
          select: {
            id: true,
            name: true
          }
        },
        documents: {
          select: {
            id: true,
            File: true
          }
        }
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: {
        docsState,
        paymentState
      }
    });
    return {
      totalItems,
      currentPage: page,
      totalPages,
      items: enrollments
    };
  }
};

// src/use-cases/errors/enrollment-not-found.ts
var EnrollmentNotFoundError = class extends Error {
  constructor() {
    super("Enrollment not found.");
  }
};

// src/use-cases/enrollment/get-enrollment-by-identity-card.ts
var GetEnrollmentByIdentityCardUseCase = class {
  constructor(enrollmentsRepository) {
    this.enrollmentsRepository = enrollmentsRepository;
  }
  async execute({
    identityCardNumber
  }) {
    const enrollment = await this.enrollmentsRepository.findByIdentityCardNumber(identityCardNumber);
    if (!enrollment) {
      throw new EnrollmentNotFoundError();
    }
    return {
      enrollment
    };
  }
};

// src/use-cases/factories/make-get-enrollment-by-identity-card-use-case.ts
function makeGetEnrollmentByIdentityCardUseCase() {
  const prismaEnrollmentsRepository = new PrismaEnrollmentsRepository();
  const useCase = new GetEnrollmentByIdentityCardUseCase(prismaEnrollmentsRepository);
  return useCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeGetEnrollmentByIdentityCardUseCase
});
