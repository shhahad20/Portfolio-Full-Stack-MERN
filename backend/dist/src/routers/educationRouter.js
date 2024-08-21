import { Router } from 'express';
import { addEducation, deleteEducationById, getEducation, getEducationById, updateEducationById } from '../controllers/educationController.js';
const router = Router();
router.get('/', getEducation);
router.get('/:id', getEducationById);
router.post('/add-education', addEducation);
router.put('/:id', updateEducationById);
router.delete('/:id', deleteEducationById);
export default router;
