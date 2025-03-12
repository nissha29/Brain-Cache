import { HfInference } from "@huggingface/inference";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.HUGGING_FACE_API_KEY;

if(! apiKey){
    throw new Error(`API key is missing`);
}

const hfClient = new HfInference(apiKey);
export default hfClient;