import {z} from "zod";

export const loginSchema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .max(100, {message: "Email cannot be longer than 100 characters"})
        .email(),
    password: z.string()
        .min(1, {message: "Password is required"})
        .max(100, {message: "Password cannot be longer than 100 characters"}),
});

export type LoginSchema = z.infer<typeof loginSchema>;