import { Document } from 'mongoose'

export interface EducationInterface extends Document {
  title: string
  school: string
  date: string
  description: string
}

export type EducationInput = Omit<EducationInterface, '_id'>