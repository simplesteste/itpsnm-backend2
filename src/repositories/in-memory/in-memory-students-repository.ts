import { Student } from '@prisma/client'
import { StudentCreateInput, StudentsRepository } from '../student-repository'

export class InMemoryStudentRepository implements StudentsRepository {

  public items: Student[] = []

  async findById(id: number): Promise<Student | null> {
    const student = this.items.find((item) => item.id === id)
    if (!student) {
      return null
    }
    return student
  }
  async findByName(name: string): Promise<Student | null> {
    const student = this.items.filter((item) => item.fullName.includes(name))
    if (!student) {
      return null
    }
    return student[0]
  }
  async create(data: StudentCreateInput): Promise<Student> {
    const newStudent: Student = {
      id: 1,
      type: data.type,
      fullName: data.fullName,
      password: data.password,
      father: data.father,
      mother: data.mother,
      dateOfBirth: new Date(data.dateOfBirth),
      height: data.height,
      identityCardNumber: data.identityCardNumber,
      gender: data.gender,
      emissionDate: new Date(data.emissionDate),
      expirationDate: new Date(data.expirationDate),
      maritalStatus: data.maritalStatus,
      residence: data.residence,
      phone: data.phone,
      email: data.email,
      alternativePhone: data.alternativePhone || null,
      countyId: data.countyId,
      courseId: data.courseId,
      classeId: data.classeId,
      levelId: data.levelId,
      provinceId: data.provinceId
    }
    this.items.push(newStudent)
    return newStudent
  }
  async searchMany(query: string, page: number): Promise<Student[]> {
    return this.items
      .filter((item) => item.fullName.includes(query))
      .slice((page - 1) * 20, page * 20)
  }
  async destroy(id: number): Promise<boolean> {
    const index = this.items.findIndex((item) => item.id === id)
    if (index !== -1) {
      this.items.splice(index, 1)
      return true
    }
    return false
  }
  async findByEmail(email: string): Promise<Student | null> {
    const student = this.items.find((item) => item.email === email)
    if (!student) {
      return null
    }
    return student
  }
  async findByPhone(phone: number): Promise<Student | null> {
    const student = this.items.find((item) => item.phone === phone)
    if (!student) {
      return null
    }
    return student
  }
  async findByAlternativePhone(phone: number): Promise<Student | null> {
    const student = this.items.find((item) => item.alternativePhone === phone)
    if (!student) {
      return null
    }
    return student
  }
  async findByIdentityCardNumber(identityCardNumber: string): Promise<Student | null> {
    const student = this.items.find((item) => item.identityCardNumber === identityCardNumber)
    if (!student) {
      return null
    }
    return student
  }

}
