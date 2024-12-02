import {model, Schema} from "mongoose";
import {PostType} from "../types/Post";


const PostSchema = new Schema<PostType>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
    time: {type: String, required: true},
});

export default model<PostType>('Post', PostSchema)