import hfClient from "../config/hf.config";

export async function generateEmbedding(text: string){
    try{

        const model = 'sentence-transformers/all-mpnet-base-v2';
        const embedding = await hfClient.featureExtraction({
            model: model,
            inputs: text,
        })
        return embedding;
    }catch(err){
        console.log(`Error while generating embeddings, ${err}`);
    }
}