import { Schema, model } from 'mongoose'
import { ExperienceInterface } from '../types/experienceInterface.js'

 const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    source: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Experience = model<ExperienceInterface>('Experience', experienceSchema)

export default Experience