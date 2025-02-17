import { z } from "zod";

export const userValidationSchema = z.object({
    username: z.string()
                .min(3, { message: 'Username must be at least 3 characters' })
                .max(20, { message: 'Username must be between 3 and 20 characters' }),
    password: z.string()
                .min(6, { message: 'Password must be at least 6 characters' })
                .max(20, { message: 'Password must be between 6 and 20 characters' })
                .regex(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
                    { message: "Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character" }
                )             
});