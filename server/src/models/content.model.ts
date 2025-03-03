import { Schema, Types, model } from "mongoose";

const contentType = ['image', 'video', 'article', 'audio'];
const contentSchema = new Schema({
    link: {
        type: String,
    },
    type: {
        type: contentType,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: { 
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
})

const Content = model('Content', contentSchema);
export default Content;