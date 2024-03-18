import {z} from "zod";

export const registrationSchema =  z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .max(100, {message: "Email cannot be longer than 100 characters"})
        .email(),
    password: z.string()
        .min(8, {message: "Password has to be at least 8 characters"})
        .max(100, {message: "Password cannot be longer than 100 characters"}),
    confirmPassword: z.string()
        .min(1, {message: "Confirm password is required"}),
    walletAddress: z.string()
        .regex(/^0x[a-fA-F0-9]{40}$/, {message: "A valid wallet address is required"})
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
