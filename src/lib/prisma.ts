import { PrismaClient } from '@prisma/client'
import { Provinces, courses, employees, itemPrices, levels, users } from './bulk_insert';

export const prisma = new PrismaClient({
  // log: env.NODE_ENV === 'dev' ? ['query', 'info', 'warn', 'error'] : [],
  log: []
})

async function main() {


  // await prisma.province.deleteMany({where:{}})
  // await prisma.itemPrices.deleteMany({where:{}})
  // await prisma.classe.deleteMany({where:{}})
  // await prisma.level.deleteMany({where:{}})
  // await prisma.course.deleteMany({where:{}});
  // await prisma.accessLog.deleteMany({where:{}});
  // await prisma.user.deleteMany({where:{}});
  // await prisma.employee.deleteMany({where:{}});


  // await prisma.province.createMany({
  //   data: Provinces,
  // });
  // await prisma.level.createMany({
  //   data: levels,
  // });
  // await prisma.course.createMany({
  //   data: courses,
  // });
  // await prisma.employee.createMany({
  //   data: employees,
  // });
  // await prisma.user.createMany({
  //   data: users,
  // });
  // await prisma.itemPrices.createMany({
  //   data: itemPrices,
  // });

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
