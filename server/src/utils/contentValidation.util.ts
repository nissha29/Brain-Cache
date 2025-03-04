import { z } from "zod";

export const contentValidationSchema = z.object({
        link : z.string()
                .url()
                .or(z.literal(''))
                .optional(),
        type: z.enum(["Document", "Links", "X", "Linkedin", "Youtube", "Pinterest", "Instagram", "Facebook"]),
        title: z.string()        
                .min(3, { message: "Title must be at least 3 characters long" })
                .max(20, { message: "Title must be at most 20 characters long" }),
        description: z.string()
                       .min(3, { message: "Description must be at least 3 characters long" })
                       .max(3000, { message: "Description must be at most 3000 characters long"})
});