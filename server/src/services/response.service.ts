import model from "../config/gemini.config";
import { ResponseProps } from "../types/contextProps.type";

export async function generateResponse(props: ResponseProps) {
    try {

        const userContext = props.context.filter((item) => {
            return item.metadata.userId === props.userId;
        })

        if (userContext.length === 0) {
            return "I couldn't find any relevant information in your brain. Please try a different query or add more content.";
        }

        const contextString = userContext.map(item => {
            return `Document ID: ${item.id}
                    Score: ${item.score}
                    Content: ${JSON.stringify(item.metadata, null, 6)}`;
        }).join('\n\n');


        const prompt = `
        You are an assistant that answers questions based on the provided context.
        
        CONTEXT:
        ${contextString}
        
        QUESTION:
        ${props.query}
        
        INSTRUCTIONS:
        - Answer the question based on the provided context and don't write based on the provided context in front of answer
        - Keep the answer somewhat big
        - Don't give the response like this is description, this is title just give the summary of them
        - Remove all \n  and '\' , '/' from the reponse generated
        
        ANSWER:`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
    } catch (err) {
        console.log(`Erro while generating AI's response`);
        throw new Error(`error  while generating response, ${err}`);
    }
}