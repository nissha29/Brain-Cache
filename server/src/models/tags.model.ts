import { Schema, model } from "mongoose";

const tagsSchema = new Schema({
    title:  {
        type: String,
        required: true,
        unique: true
    }
})

const Tags = model('Tags', tagsSchema);
export default Tags;