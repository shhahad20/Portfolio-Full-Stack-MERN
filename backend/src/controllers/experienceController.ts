import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express'
import Experience from '../models/experienceSchema.js'
import { ExperienceInterface } from '../types/experienceInterface.js'

// Get all Experiences
export const getExperiences = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const experiences = await Experience.find();
      if (!experiences) {
        const error = new Error('Experience not found')
        throw error
      }
      res.status(200).json({
        message: 'Get all the experiences',
        payload: experiences,
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

// Add Experience
export const addExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, company, date, description, source } = req.body
      const newExperience: ExperienceInterface = new Experience({
        title: title,
        company: company,
        date: date,
        description: description,
        source: source,
      })
  
      await newExperience.save()
      res.status(201).json({ message: 'You added a new experience', payload: newExperience })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
// Get a single experience by slug
export const getExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const experience = await Experience.findById(id);
      res.status(200).json({ message: 'Get experience by id', payload: experience })
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        const error = new Error(`Not a vaild id`)
        next(error)
      } else {
        next(error)
      }
    }
  }

// Update Experience
export const updateExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const updatedExperience = req.body
      const updateData = await Experience.findByIdAndUpdate(id, updatedExperience, {
        new: true,
      })
      if (!updateData) {
        next(Error('Experience not found with this id'))
        return
      }
      res.status(200).json({ message: 'You updated an experience', payload: updateData })
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        const error = new Error(`Not a vaild id`)
        next(error)
      } else {
        next(error)
      }
    }
  }

// Delete Experience
export const deleteExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const deletedExperience = await Experience.findByIdAndDelete(id)
  
      res.status(200).json({
        message: `You deleted an expereience with data:`,
        payload: deletedExperience
      })
    } catch (error) {
        next(error)
        console.log(error)
      }
    }