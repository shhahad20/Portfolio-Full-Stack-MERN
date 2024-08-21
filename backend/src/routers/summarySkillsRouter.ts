import { Router } from 'express';
import { addSkill, deleteSkillById, getSkillById, getSkills, updateSkillById } from '../controllers/summarSkillsController.js';
import { upload } from '../middlewares/uploadFile.js';

const router = Router();

router.get('/', getSkills);
router.get('/:id', getSkillById);
router.post('/add-skill',upload.single('image'), addSkill);
router.put('/:id', upload.single('image'), updateSkillById);
router.delete('/:id', deleteSkillById);


export default router;