import { Document } from 'mongoose'

export interface SkillInterface extends Document {
  title: string
  description: string
  image: string
}

export type SkillInput = Omit<SkillInterface, '_id'>