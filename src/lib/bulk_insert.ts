import { Course, Employee, ItemPrices, Level, Province, User } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export const Provinces: Province[] = [
  { name: "Luanda", id: 1, created_at: new Date(), update_at: new Date() },
  { name: "Benguela", id: 2, created_at: new Date(), update_at: new Date() },
  { name: "Huíla", id: 3, created_at: new Date(), update_at: new Date() },
  { name: "Namibe", id: 4, created_at: new Date(), update_at: new Date() },
  { name: "Kwanza Sul", id: 5, created_at: new Date(), update_at: new Date() },
  { name: "Kwanza Norte", id: 6, created_at: new Date(), update_at: new Date() },
  { name: "Malanje", id: 7, created_at: new Date(), update_at: new Date() },
  { name: "Lunda Sul", id: 8, created_at: new Date(), update_at: new Date() },
  { name: "Lunda Norte", id: 9, created_at: new Date(), update_at: new Date() },
  { name: "Moxico", id: 10, created_at: new Date(), update_at: new Date() },
  { name: "Cuando Cubango", id: 11, created_at: new Date(), update_at: new Date() },
  { name: "Zaire", id: 12, created_at: new Date(), update_at: new Date() },
  { name: "Uíge", id: 13, created_at: new Date(), update_at: new Date() },
  { name: "Cunene", id: 14, created_at: new Date(), update_at: new Date() },
  { name: "Bengo", id: 15, created_at: new Date(), update_at: new Date() },
  { name: "Cabinda", id: 16, created_at: new Date(), update_at: new Date() },
  { name: "Luanda Norte", id: 17, created_at: new Date(), update_at: new Date() },
  { name: "Luanda Sul", id: 18, created_at: new Date(), update_at: new Date() },
];

export const levels: Level[] = [
  { name: "CLASS_10", id: 1, created_at: new Date(), update_at: new Date() },
  { name: "CLASS_11", id: 2, created_at: new Date(), update_at: new Date() },
  { name: "CLASS_12", id: 3, created_at: new Date(), update_at: new Date() },
  { name: "CLASS_13", id: 4, created_at: new Date(), update_at: new Date() },
]
export const courses: Course[] = [
  { name: "Enfermagem", id: 1, created_at: new Date(), update_at: new Date() },
  { name: "Análises Clínica", id: 2, created_at: new Date(), update_at: new Date() },
  { name: "Fisioterapia", id: 3, created_at: new Date(), update_at: new Date() },
  { name: "Farmácia", id: 4, created_at: new Date(), update_at: new Date() },
];

export const itemPrices: ItemPrices[] = [
  {
    id: 1,
    itemName: "Confirmação",
    basePrice: new Decimal("9000"),
    levelId: 3,
    priceWithIva: new Decimal("9000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    itemName: "Matrícula",
    basePrice: new Decimal("10000"),
    levelId: 3,
    priceWithIva: new Decimal("10000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    itemName: "Propina",
    basePrice: new Decimal("17500"),
    levelId: 3,
    priceWithIva: new Decimal("17500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    itemName: "Ficha de Propina",
    basePrice: new Decimal("1000"),
    levelId: 3,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    itemName: "Cartão PVC",
    basePrice: new Decimal("2000"),
    levelId: 3,
    priceWithIva: new Decimal("2000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    itemName: "Fita Personalizada",
    basePrice: new Decimal("1000"),
    levelId: 3,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    itemName: "Folhas de Prova/Trim",
    basePrice: new Decimal("1800"),
    levelId: 3,
    priceWithIva: new Decimal("1800"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    itemName: "Bata",
    basePrice: new Decimal("17000"),
    levelId: 3,
    priceWithIva: new Decimal("19380"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    itemName: "Túnica",
    basePrice: new Decimal("20000"),
    levelId: 3,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    itemName: "Uniforme de Educação Física",
    basePrice: new Decimal("15000"),
    levelId: 3,
    priceWithIva: new Decimal("17100"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 11,
    itemName: "Manjunco",
    basePrice: new Decimal("20000"),
    levelId: 3,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 12,
    itemName: "Confirmação",
    basePrice: new Decimal("9500"),
    levelId: 4,
    priceWithIva: new Decimal("9500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 13,
    itemName: "Matrícula",
    basePrice: new Decimal("10500"),
    levelId: 4,
    priceWithIva: new Decimal("10500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 14,
    itemName: "Propina",
    basePrice: new Decimal("19500"),
    levelId: 4,
    priceWithIva: new Decimal("19500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 15,
    itemName: "Ficha de Propina",
    basePrice: new Decimal("1000"),
    levelId: 4,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 16,
    itemName: "Cartão PVC",
    basePrice: new Decimal("2000"),
    levelId: 4,
    priceWithIva: new Decimal("2000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 17,
    itemName: "Fita Personalizada",
    basePrice: new Decimal("1000"),
    levelId: 4,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 18,
    itemName: "Folhas de Prova/Trim",
    basePrice: new Decimal("1800"),
    levelId: 4,
    priceWithIva: new Decimal("1800"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 19,
    itemName: "Bata",
    basePrice: new Decimal("17000"),
    levelId: 4,
    priceWithIva: new Decimal("19380"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 20,
    itemName: "Túnica",
    basePrice: new Decimal("20000"),
    levelId: 4,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 21,
    itemName: "Uniforme de Educação Física",
    basePrice: new Decimal("15000"),
    levelId: 4,
    priceWithIva: new Decimal("17100"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 22,
    itemName: "Manjunco",
    basePrice: new Decimal("20000"),
    levelId: 4,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 23,
    itemName: "Confirmação",
    basePrice: new Decimal("8500"),
    levelId: 2,
    priceWithIva: new Decimal("8500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 24,
    itemName: "Matrícula",
    basePrice: new Decimal("9500"),
    levelId: 2,
    priceWithIva: new Decimal("9500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 25,
    itemName: "Propina",
    basePrice: new Decimal("16500"),
    levelId: 2,
    priceWithIva: new Decimal("16500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 26,
    itemName: "Ficha de Propina",
    basePrice: new Decimal("1000"),
    levelId: 2,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 27,
    itemName: "Cartão PVC",
    basePrice: new Decimal("2000"),
    levelId: 2,
    priceWithIva: new Decimal("2000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 28,
    itemName: "Fita Personalizada",
    basePrice: new Decimal("1000"),
    levelId: 2,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 29,
    itemName: "Folhas de Prova/Trim",
    basePrice: new Decimal("1800"),
    levelId: 2,
    priceWithIva: new Decimal("1800"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 30,
    itemName: "Bata",
    basePrice: new Decimal("17000"),
    levelId: 2,
    priceWithIva: new Decimal("19380"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 31,
    itemName: "Túnica",
    basePrice: new Decimal("20000"),
    levelId: 2,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 32,
    itemName: "Uniforme de Educação Física",
    basePrice: new Decimal("15000"),
    levelId: 2,
    priceWithIva: new Decimal("17100"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 33,
    itemName: "Manjunco",
    basePrice: new Decimal("20000"),
    levelId: 2,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 34,
    itemName: "Confirmação",
    basePrice: new Decimal("8000"),
    levelId: 1,
    priceWithIva: new Decimal("8000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 35,
    itemName: "Matrícula",
    basePrice: new Decimal("9000"),
    levelId: 1,
    priceWithIva: new Decimal("9000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 36,
    itemName: "Propina",
    basePrice: new Decimal("15500"),
    levelId: 1,
    priceWithIva: new Decimal("15500"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 37,
    itemName: "Ficha de Propina",
    basePrice: new Decimal("1000"),
    levelId: 1,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 38,
    itemName: "Cartão PVC",
    basePrice: new Decimal("2000"),
    levelId: 1,
    priceWithIva: new Decimal("2000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 39,
    itemName: "Fita Personalizada",
    basePrice: new Decimal("1000"),
    levelId: 1,
    priceWithIva: new Decimal("1000"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 40,
    itemName: "Folhas de Prova/Trim",
    basePrice: new Decimal("1800"),
    levelId: 1,
    priceWithIva: new Decimal("1800"),
    ivaPercentage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 41,
    itemName: "Bata",
    basePrice: new Decimal("17000"),
    levelId: 1,
    priceWithIva: new Decimal("19380"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 42,
    itemName: "Túnica",
    basePrice: new Decimal("20000"),
    levelId: 1,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 43,
    itemName: "Uniforme de Educação Física",
    basePrice: new Decimal("15000"),
    levelId: 1,
    priceWithIva: new Decimal("17100"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 44,
    itemName: "Manjunco",
    basePrice: new Decimal("20000"),
    levelId: 1,
    priceWithIva: new Decimal("22800"),
    ivaPercentage: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const employees: Employee[] = [
  {
    id: 1,
    fullName: "Aguinaldo Algo",
    alternativePhone: "923232323",
    dateOfBirth: new Date("01-01-2005"),
    emissionDate: new Date("01-01-2005"),
    expirationDate: new Date("01-01-2005"),
    gender: "MALE",
    identityCardNumber: "11112112",
    maritalStatus: "DIVORCED",
    phone: "0202020",
    residence: "22323232swd",
    created_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 935,
    fullName: "default",
    alternativePhone: "null",
    dateOfBirth: new Date("01-01-2005"),
    emissionDate: new Date("01-01-2005"),
    expirationDate: new Date("01-01-2005"),
    gender: "MALE",
    identityCardNumber: "935",
    maritalStatus: "DIVORCED",
    phone: "null",
    residence: "null",
    created_at: new Date(),
    update_at: new Date(),
  }
]
export const users: User[] = [
  {
    id: 1,
    email: "admin@itpsnm.com",
    isActive: true,
    isBlocked: false,
    role: "ADMIN",
    password: "$2a$10$7TGzW5J49aYr3ACm67Rlku09eM1kGcDIb.iTGJm6GIJqqmv97Zo52",
    employeeId: 1,
    loginAttempt: 0,
    enrollmentId: null,
    studentId: null,
    lastLogin: new Date(),
    created_at: new Date(),
    update_at: new Date(),
  }
]
