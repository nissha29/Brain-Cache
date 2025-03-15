import { GoogleGenerativeAI } from '@google/generative-ai';
import  dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.GEMINI_API_KEY;

if(! apiKey){
    throw new Error(`Gemini api key is missing`);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash'});
export default model;