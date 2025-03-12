import pinecone from "./pinecone.config";
import dotenv from 'dotenv';

dotenv.config();

const indexName = process.env.INDEX_NAME;

if(! indexName){
    throw new Error(`Index name is not defined`);
}

export default pinecone.Index(indexName);