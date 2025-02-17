import { Schema, Types, model } from "mongoose";

const linkSchema = new Schema({
    hash:  {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Link = model('Link', linkSchema);
export default Link;