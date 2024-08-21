import { Schema, model } from 'mongoose'
import { EducationInterface } from '../types/educationInterface'

 const educationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    school: {
        type: String,
        required: true,
      },
    date: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
)

export const Education = model<EducationInterface>('Education', educationSchema)

export default Education