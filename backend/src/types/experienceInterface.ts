import { Document } from 'mongoose'

export interface ExperienceInterface extends Document {
  title: string
  company: string
  date: string
  source: string
  description: string
}

export type ExperienceInput = Omit<ExperienceInterface, '_id'>