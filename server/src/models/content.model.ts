import { Schema, Types, model } from "mongoose";

const contentType = ['image', 'video', 'article', 'audio'];
const contentSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    type: {
        type: contentType,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: Types.ObjectId,
        ref: 'Tag',
    }],
    userId: { 
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Content = model('Content', contentSchema);
export default Content;