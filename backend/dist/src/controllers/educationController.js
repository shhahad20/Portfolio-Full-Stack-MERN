import mongoose from 'mongoose';
import Education from '../models/educationSchema.js';
// Get all education
export const getEducation = async (req, res, next) => {
    try {
        const education = await Education.find();
        if (!education) {
            const error = new Error('Education not found');
            throw error;
        }
        res.status(200).json({
            message: 'Get all the Education',
            payload: education,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
// Add Education
export const addEducation = async (req, res, next) => {
    try {
        const { title, school, date, description } = req.body;
        const newEducation = new Education({
            title: title,
            school: school,
            date: date,
            description: description,
        });
        await newEducation.save();
        res.status(201).json({ message: 'You added a new Education', payload: newEducation });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
// Get a single Education by Id
export const getEducationById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const education = await Education.findById(id);
        res.status(200).json({ message: 'Get Education by id', payload: education });
    }
    catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            const error = new Error(`Not a vaild id`);
            next(error);
        }
        else {
            next(error);
        }
    }
};
// Update Education
export const updateEducationById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedEducation = req.body;
        const updateData = await Education.findByIdAndUpdate(id, updatedEducation, {
            new: true,
        });
        if (!updateData) {
            next(Error('Education not found with this id'));
            return;
        }
        res.status(200).json({ message: 'You updated an Education', payload: updateData });
    }
    catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            const error = new Error(`Not a vaild id`);
            next(error);
        }
        else {
            next(error);
        }
    }
};
// Delete Education
export const deleteEducationById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedEducation = await Education.findByIdAndDelete(id);
        res.status(200).json({
            message: `You deleted an education with data:`,
            payload: deletedEducation
        });
    }
    catch (error) {
        next(error);
        console.log(error);
    }
};
