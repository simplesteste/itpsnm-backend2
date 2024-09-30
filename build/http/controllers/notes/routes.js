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

// src/http/controllers/notes/routes.ts
var routes_exports = {};
__export(routes_exports, {
  notesRoutes: () => notesRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/http/controllers/notes/add-note.ts
var import_zod = require("zod");

// src/use-cases/note/add-note.ts
var import_crypto = require("crypto");

// src/use-cases/errors/enrollment-not-found.ts
var EnrollmentNotFoundError = class extends Error {
  constructor() {
    super("Enrollment not found.");
  }
};

// src/use-cases/errors/subject-not-found.ts
var SubjectNotFoundError = class extends Error {
  constructor() {
    super("Subject not found.");
  }
};

// src/use-cases/note/add-note.ts
var CreateNoteUseCase = class {
  constructor(notesRepository, enrollmentsRepository, subjectsRepository) {
    this.notesRepository = notesRepository;
    this.enrollmentsRepository = enrollmentsRepository;
    this.subjectsRepository = subjectsRepository;
  }
  async execute({
    pf1 = 0,
    pf2 = 0,
    pft = 0,
    ps1 = 0,
    ps2 = 0,
    pst = 0,
    pt1 = 0,
    pt2 = 0,
    ptt = 0,
    nee = 0,
    resource = 0,
    level,
    enrollmentId,
    subjectId
  }) {
    const enrollment = await this.enrollmentsRepository.checkStatus(enrollmentId);
    const subject = await this.subjectsRepository.findById(subjectId);
    if (!subject) {
      throw new SubjectNotFoundError();
    }
    if (!enrollment) {
      throw new EnrollmentNotFoundError();
    }
    const note = await this.notesRepository.addNote({
      id: (0, import_crypto.randomInt)(99999),
      pf1,
      pf2,
      pft,
      ps1,
      ps2,
      pst,
      pt1,
      pt2,
      ptt,
      nee,
      resource,
      enrollmentId,
      subjectId,
      created_at: /* @__PURE__ */ new Date(),
      update_at: /* @__PURE__ */ new Date(),
      level
    });
    return {
      note
    };
  }
};

// src/repositories/prisma/prisma-note-repository.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var PrismaNotesRepository = class {
  async addNote(data) {
    const findNote = await prisma.note.findFirst({
      where: {
        level: data.level,
        enrollmentId: data.enrollmentId,
        subjectId: data.subjectId
      }
    });
    if (!findNote) {
      return await prisma.note.create({
        data: {
          pf1: data.pf1 ?? 0,
          pf2: data.pf2 ?? 0,
          pft: data.pft ?? 0,
          ps1: data.ps1 ?? 0,
          ps2: data.ps2 ?? 0,
          pst: data.pst ?? 0,
          pt1: data.pt1 ?? 0,
          pt2: data.pt2 ?? 0,
          ptt: data.ptt ?? 0,
          nee: data.nee ?? 0,
          resource: data.resource ?? 0,
          level: data.level,
          enrollmentId: data.enrollmentId,
          subjectId: data.subjectId,
          created_at: data.created_at ?? /* @__PURE__ */ new Date(),
          update_at: /* @__PURE__ */ new Date()
        }
      });
    }
    return await prisma.note.update({
      where: {
        id: findNote.id
      },
      data: {
        resource: data.resource ?? findNote.resource,
        pf1: data.pf1 ?? findNote.pf1,
        pf2: data.pf2 ?? findNote.pf2,
        pft: data.pft ?? findNote.pft,
        ps1: data.pf1 ?? findNote.ps1,
        ps2: data.pf2 ?? findNote.ps2,
        pst: data.pft ?? findNote.pst,
        pt1: data.pf1 ?? findNote.pt1,
        pt2: data.pf2 ?? findNote.pt2,
        ptt: data.pft ?? findNote.ptt,
        nee: data.nee ?? findNote.nee,
        level: data.level,
        update_at: /* @__PURE__ */ new Date()
      }
    });
  }
  async update(id, data) {
    const note = await prisma.note.update({
      where: { id },
      data: {
        ...data,
        update_at: /* @__PURE__ */ new Date()
      }
    }).catch(() => null);
    return note;
  }
  async destroy(id) {
    try {
      await prisma.note.delete({
        where: { id }
      });
      return true;
    } catch {
      return false;
    }
  }
  async searchMany(criteria) {
    const notes = await prisma.note.findMany({
      where: criteria
    });
    return notes;
  }
  async getNoteWithFullGrades(criteria) {
    const notes = await prisma.note.findMany({
      where: {
        enrollmentId: criteria.enrollmentId,
        OR: [
          {
            level: criteria.level,
            subjectId: criteria.subjectId
          }
        ]
      },
      include: {
        enrollments: false,
        // Inclui os dados do estudante
        subjects: true
        // Inclui os dados da disciplina
      }
    });
    if (!notes.length)
      return null;
    return notes;
  }
};

// src/lib/prisma.ts
var import_client2 = require("@prisma/client");
var prisma2 = new import_client2.PrismaClient({
  // log: env.NODE_ENV === 'dev' ? ['query', 'info', 'warn', 'error'] : [],
  log: ["query", "info", "warn", "error"]
});

// src/repositories/prisma/prisma-enrollments-repository.ts
var PrismaEnrollmentsRepository = class {
  async checkStatus(enrollmentId) {
    let enrollment = await prisma2.enrollment.findUnique({
      where: {
        id: enrollmentId
      },
      include: {
        students: {
          select: {
            fullName: true,
            id: true
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
        }
      }
    });
    return enrollment;
  }
  async findByEnrollmentNumber(enrollmentId) {
    let enrollment = await prisma2.enrollment.findUnique({
      where: {
        id: enrollmentId
      }
    });
    return enrollment;
  }
  async findByIdentityCardNumber(identityCardNumber) {
    let enrollment = await prisma2.enrollment.findUnique({
      where: { identityCardNumber },
      include: {
        students: {
          select: {
            fullName: true,
            id: true
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
        }
      }
    });
    return enrollment;
  }
  async toggleStatus(enrollmentId, docsState, paymentState) {
    let enrollment = await prisma2.enrollment.update({
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
    let isDeletedEnrollment = await prisma2.enrollment.delete({
      where: {
        id: enrollmentId
      }
    });
    return isDeletedEnrollment ? true : false;
  }
  //TODO: Mudar o retorno de any
  async create(data) {
    let enrollment = await prisma2.enrollment.create({
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
    const totalItems = await prisma2.enrollment.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    let enrollments = await prisma2.enrollment.findMany({
      include: {
        students: {
          select: {
            dateOfBirth: true,
            gender: true,
            height: true,
            identityCardNumber: true,
            fullName: true,
            countyId: true,
            alternativePhone: true,
            emissionDate: true,
            expirationDate: true,
            father: true,
            files: true,
            id: true,
            maritalStatus: true,
            mother: true,
            phone: true,
            provinceId: true,
            residence: true,
            type: true
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

// src/repositories/prisma/prisma-subject-repository.ts
var PrismaSubjectRepository = class {
  async findByName(name) {
    const findSubject = await prisma2.subject.findUnique({
      where: {
        name
      }
    });
    return findSubject;
  }
  async create(data) {
    let newSubject = await prisma2.subject.create({
      data: {
        name: data.name
      }
    });
    return newSubject;
  }
  async searchMany(query, page) {
    let pageSize = 20;
    let courses = await prisma2.subject.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive"
        }
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    return courses;
  }
  async destroy(id) {
    let findSubject = await prisma2.subject.delete({
      where: {
        id
      }
    });
    return findSubject ? true : false;
  }
  async findById(id) {
    const subject = await prisma2.subject.findUnique({
      where: {
        id
      }
    });
    return subject;
  }
};

// src/use-cases/factories/make-create-note-use-case.ts
function makeCreateNoteUseCase() {
  const notesRepository = new PrismaNotesRepository();
  const enrollmentsRepository = new PrismaEnrollmentsRepository();
  const subjectsRepository = new PrismaSubjectRepository();
  return new CreateNoteUseCase(notesRepository, enrollmentsRepository, subjectsRepository);
}

// src/use-cases/errors/note-already-exists-error.ts
var NoteAlreadyExistsError = class extends Error {
  constructor() {
    super("Note already exists.");
  }
};

// src/http/controllers/notes/add-note.ts
async function create(request, reply) {
  const createNoteBodySchema = import_zod.z.object({
    pf1: import_zod.z.number().default(0),
    pf2: import_zod.z.number().default(0),
    pft: import_zod.z.number().default(0),
    ps1: import_zod.z.number().default(0),
    ps2: import_zod.z.number().default(0),
    pst: import_zod.z.number().default(0),
    pt1: import_zod.z.number().default(0),
    pt2: import_zod.z.number().default(0),
    ptt: import_zod.z.number().default(0),
    nee: import_zod.z.number().default(0),
    resource: import_zod.z.number().optional(),
    level: import_zod.z.enum(["CLASS_10", "CLASS_11", "CLASS_12", "CLASS_13"]),
    enrollmentId: import_zod.z.number(),
    subjectId: import_zod.z.number()
  });
  const { pf1, nee, pf2, pft, ps1, ps2, pst, pt1, pt2, ptt, resource, level, enrollmentId, subjectId } = createNoteBodySchema.parse(request.body);
  try {
    console.log("1111");
    const createNoteUseCase = makeCreateNoteUseCase();
    const { note } = await createNoteUseCase.execute({
      pf1,
      nee,
      pf2,
      pft,
      ps1,
      ps2,
      pst,
      pt1,
      pt2,
      ptt,
      resource,
      level,
      enrollmentId,
      subjectId
    });
    return reply.status(200).send(note);
  } catch (err) {
    if (err instanceof NoteAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    if (err instanceof EnrollmentNotFoundError) {
      return reply.status(409).send({ message: err.message });
    }
    if (err instanceof SubjectNotFoundError) {
      return reply.status(409).send({ message: err.message });
    }
    console.log(err);
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}

// src/use-cases/note/search-many.ts
var SearchManyNotesUseCase = class {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }
  async execute({
    p1,
    p2,
    exam,
    nee,
    resource,
    mester,
    studentId,
    subjectId
  }) {
    const criteria = {
      p1,
      p2,
      exam,
      nee,
      resource,
      mester,
      studentId,
      subjectId
    };
    const notes = await this.notesRepository.searchMany(criteria);
    return {
      notes
    };
  }
};

// src/use-cases/factories/make-search-many-notes-use-case.ts
function makeSearchManyNotesUseCase() {
  const notesRepository = new PrismaNotesRepository();
  return new SearchManyNotesUseCase(notesRepository);
}

// src/http/controllers/notes/search-many.ts
var import_zod2 = require("zod");
async function searchMany(request, reply) {
  const searchManyBodySchema = import_zod2.z.object({
    studentId: import_zod2.z.number().optional(),
    subjectId: import_zod2.z.number().optional(),
    mester: import_zod2.z.enum(["FIRST", "SECOND", "THIRD"]).optional(),
    level: import_zod2.z.enum(["CLASS_10", "CLASS_11", "CLASS_12", "CLASS_13"]).optional()
  });
  const criteria = searchManyBodySchema.parse(request.query);
  try {
    const searchManyNotesUseCase = makeSearchManyNotesUseCase();
    const notes = await searchManyNotesUseCase.execute(criteria);
    return reply.status(200).send({ notes });
  } catch (err) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}

// src/use-cases/note/get-notes-with-grades.ts
var GetNoteWithGradesUseCase = class {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }
  async execute(criteria) {
    const note = await this.notesRepository.getNoteWithFullGrades(criteria);
    return {
      note
    };
  }
};

// src/use-cases/factories/make-get-note-with-full-grades-use-case.ts
function makeGetNoteWithFullGradesUseCase() {
  const notesRepository = new PrismaNotesRepository();
  return new GetNoteWithGradesUseCase(notesRepository);
}

// src/http/controllers/notes/get-note-with-full-grades.ts
var import_client3 = require("@prisma/client");
var import_zod3 = require("zod");
async function getNoteWithFullGrades(request, reply) {
  const getNoteWithFullGradesParamsSchema = import_zod3.z.object({
    enrollmentId: import_zod3.z.coerce.number()
  });
  const getNoteWithFullGradesQueriesSchema = import_zod3.z.object({
    level: import_zod3.z.nativeEnum(import_client3.LevelName).optional(),
    // Use z.nativeEnum para enums
    resource: import_zod3.z.coerce.number().optional(),
    // Use z.nativeEnum para enums
    subjectId: import_zod3.z.coerce.number().optional()
    // Use z.nativeEnum para enums
  });
  const { level, subjectId } = getNoteWithFullGradesQueriesSchema.parse(request.query);
  const { enrollmentId } = getNoteWithFullGradesParamsSchema.parse(request.params);
  try {
    const getNoteWithFullGradesUseCase = makeGetNoteWithFullGradesUseCase();
    const { note } = await getNoteWithFullGradesUseCase.execute({
      enrollmentId,
      level,
      subjectId
    });
    return reply.status(200).send({
      notes: note
    });
  } catch (err) {
    if (err instanceof EnrollmentNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}

// src/http/controllers/notes/routes.ts
async function notesRoutes(app) {
  app.post("/notes", create);
  app.get("/notes/search", searchMany);
  app.get("/notes/:enrollmentId/grades", getNoteWithFullGrades);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  notesRoutes
});