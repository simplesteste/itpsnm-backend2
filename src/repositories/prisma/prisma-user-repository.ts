import { PrismaClient, User, AccessStatus } from '@prisma/client';
import { CreateUserDTO, UsersRepository } from '@/repositories/users-repository';

export class PrismaUserRepository implements UsersRepository {
  private prisma = new PrismaClient();

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: CreateUserDTO): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        role: data.role,
        loginAttempt: 0,
        isBlocked: false,
        isActive: true,
        employeeId: data.employeeId,
        studentId: data.studentId,
        lastLogin: new Date(),
        created_at: new Date(),
        update_at: new Date(),
      },
    });
  }

  async updateLoginAttempt(id: number, attempts: number): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        loginAttempt: attempts,
        update_at: new Date(),
      },
    });
  }

  async blockUser(id: number): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        isBlocked: true,
        update_at: new Date(),
      },
    });
  }

  async logAccess(userId: number, status: AccessStatus): Promise<void> {
    await this.prisma.accessLog.create({
      data: {
        userId,
        status,
        timestamp: new Date(),
      },
    });
  }
}
