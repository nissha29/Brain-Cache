import { z } from "zod";

export const contentValidationSchema = z.object({
    link : z.string()
            .url(),
    type: z.enum(['image', 'video', 'article', 'audio']),
    title: z.string()        
            .min(3, { message: "Title must be at least 3 characters long" })
            .max(100, { message: "Title must be at most 100 characters long" }),
    // tags: z.array(z.string())
    //        .min(1, { message: "At least one tag is required" })
    //        .max(10, { message: "Maximum 10 tags are allowed" }),
});