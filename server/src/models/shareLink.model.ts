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
    },
    share: {
        type: Boolean,
        required: true,
        default: false,
    }
})

const Link = model('Link', linkSchema);
export default Link;