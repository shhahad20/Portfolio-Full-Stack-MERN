import { Schema, model } from 'mongoose';
const skillSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'public/images/skillsImages/magic-wand.png',
    },
}, { timestamps: true });
export const Skill = model('Skill', skillSchema);
export default Skill;
