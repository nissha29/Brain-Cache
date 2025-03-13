import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw new Error('Pinecone API key is missing');
}

const pinecone = new Pinecone({
  apiKey,
});

export default pinecone;