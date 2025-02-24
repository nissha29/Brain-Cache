import { z } from "zod";

export const contentValidationSchema = z.object({
        link : z.string()
                .url(),
        type: z.enum(['image', 'video', 'article', 'audio']),
        title: z.string()        
                .min(3, { message: "Title must be at least 3 characters long" })
                .max(20, { message: "Title must be at most 20 characters long" }),
        description: z.string()
                       .min(3, { message: "Description must be at least 3 characters long" })
                       .max(300, { message: "Description must be at most 300 characters long"})
});