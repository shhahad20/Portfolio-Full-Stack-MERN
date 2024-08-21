import { Router } from 'express';
import { addExperience, deleteExperienceById, getExperienceById, getExperiences, updateExperienceById } from '../controllers/experienceController.js';
const router = Router();
router.get('/', getExperiences);
router.get('/:id', getExperienceById);
router.post('/add-experience', addExperience);
router.put('/:id', updateExperienceById);
router.delete('/:id', deleteExperienceById);
export default router;
