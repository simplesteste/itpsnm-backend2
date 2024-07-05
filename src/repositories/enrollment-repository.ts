import { Enrollment, EnrollementState } from '@prisma/client'

export interface EnrollmentType {
  id?: number
  studentId: number
  state: EnrollementState
  created_at?: Date
  update_at?: Date
}
export interface EnrollmentsRepository {
  checkStatus(enrollmentId: number): Promise<{id: number; state: EnrollementState } | null>
  toggleStatus(enrollmentId: number, state: EnrollementState): Promise<{id: number; status: EnrollementState } | null>
  destroy(enrollmentId: number): Promise<Boolean>
  create(data: EnrollmentType): Promise<EnrollmentType>
  searchMany(state: EnrollementState, page: number): Promise<EnrollmentType[]>
}
