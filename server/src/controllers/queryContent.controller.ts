import { Request, Response } from "express";
import { generateEmbedding } from "../services/embedding.service";
import pineconeIndex from "../config/pinecone.index";
import { generateResponse } from "../services/response.service";
import { metadataProps, ContextItem } from "../types/contextProps.type";

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
            topK: 10,
            includeMetadata: true,
        })
        
        const context: ContextItem[] = queryResponse.matches
        .filter(match => match.id && match.score && match.metadata)
        .map((match) => {
          
          const meta = match.metadata as Record<string, any>;
          
          if (!meta.type || !meta.title || !meta.description || 
              !meta.createdAt || !meta.userId || !meta.link) {
            console.warn(`Missing metadata fields for match ID: ${match.id}`);
            return null;
          }
          
          return {
            id: match.id as string,
            score: match.score as number,
            metadata: {
              type: meta.type,
              title: meta.title,
              description: meta.description,
              createdAt: meta.createdAt,
              userId: meta.userId,
              link: meta.link
            }
          } as ContextItem;
        })
        .filter(item => item !== null);

        const response = await generateResponse({query, context});
        return res.status(200).json({
            success: true,
            message: `Request successful`,
            response,
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Server error while querying content, ${err}`
        })
    }
}