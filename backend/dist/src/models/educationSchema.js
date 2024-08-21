import { Schema, model } from 'mongoose';
const educationSchema = new Schema({
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
}, { timestamps: true });
export const Education = model('Education', educationSchema);
export default Education;
