import { z } from "zod";

export const contentValidationSchema = z.object({
        link : z.string()
                .url(),
        type: z.enum(['image', 'video', 'article', 'audio']),
        title: z.string()        
                .min(3, { message: "Title must be at least 3 characters long" })
                .max(100, { message: "Title must be at most 100 characters long" }),
        tags: z.array(z.string()).min(0).max(2).optional()
});