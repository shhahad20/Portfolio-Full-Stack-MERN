import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express'
import Skill from '../models/skillSchema.js';
import { SkillInterface } from '../types/skillInterface.js';
import { deleteFromCloudinary, uploadToCloudinary, valueWithoutExtension } from '../helper/cloudinaryHelper.js';

// Get all Skills
export const getSkills = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const skills = await Skill.find();
      if (!skills) {
        const error = new Error('Skills not found')
        throw error
      }
      res.status(200).json({
        message: 'Get all the Skills',
        payload: skills,
      })
    } catch (error) {
      console.error('Error in /skills route:', error);
      res.send("Error here")
      next(error)
    }
  }

// Add Skill
export const addSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, description } = req.body
      let image = req.file && req.file.path

      if (image) {
        const cloudinaryUrl = await uploadToCloudinary(image, 'My-website/Skills')
        image = cloudinaryUrl
      }

      const newSkill: SkillInterface = new Skill({
        title: title,
        description: description,
        image: image,
      })
  
      await newSkill.save()
      res.status(201).json({ message: 'You added a new skill', payload: newSkill })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
// Get a single Skill by Id
export const getSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const skill = await Skill.findById(id);
      res.status(200).json({ message: 'Get Skill by id', payload: skill })
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        const error = new Error(`Not a vaild id`)
        next(error)
      } else {
        next(error)
      }
    }
  }

// Update Skill
export const updateSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      let image = req.file && req.file.path
      const updatedSkill = req.body
      const SkillToDelete = await Skill.findById(id)
      const updateData = await Skill.findByIdAndUpdate(id, updatedSkill, {
        new: true,
      })
      if (image) {
        if (SkillToDelete && SkillToDelete.image) {
          const publicId = await valueWithoutExtension(SkillToDelete.image)
          await deleteFromCloudinary(`My-website/Skills/${SkillToDelete.image}`)
        }
        const cloudinaryUrl = await uploadToCloudinary(image, 'My-website/Skills')
        image = cloudinaryUrl
      }
      if (!updateData) {
        next(Error('Skill not found with this id'))
        return
      }
      res.status(200).json({ message: 'You updated a Skill', payload: updateData })
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        const error = new Error(`Not a vaild id`)
        next(error)
      } else {
        next(error)
      }
    }
  }

// Delete Skill
export const deleteSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const deletedSkill = await Skill.findByIdAndDelete(id)
  
      res.status(200).json({
        message: `You deleted a skill with data:`,
        payload: deletedSkill
      })
    } catch (error) {
        next(error)
        console.log(error)
      }
    }