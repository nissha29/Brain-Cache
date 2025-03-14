import { Request, Response } from "express";
import { generateEmbedding } from "../services/embedding.service";
import pineconeIndex from "../config/pinecone.index";

export default async function queryContent(req: Request, res: Response){
    try{
        const { query } = req.body;

        if(! query){
            return res.status(400).json({
                success: false,
                message: `Query not found`
            })
        }

        const embedding = await generateEmbedding(query);

        if(! embedding){
            throw new Error(`Error while generating embedding`);
        }

        const embeddingArray = Array.isArray(embedding)
        ? Array.isArray(embedding[0]) ? embedding[0] : embedding
        : typeof embedding === 'number'
            ? [embedding]
            : []

        const queryResponse = await pineconeIndex.query({
            vector: embeddingArray as number[],
            topK: 3,
            includeMetadata: true,
        })

        const results = queryResponse.matches.map((match)=>({
            id: match.id,
            score: match.score,
            metadata: match.metadata,
        }))

        console.log(typeof(results));
        return res.status(200).json({
            success: true,
            message: `Request successful`,
            results,
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Server error while querying content, ${err}`
        })
    }
}