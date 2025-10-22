import { z } from "zod" ;

export const submissionZodSchema = z.object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string()

}).strict();



export type submissionDto = z.infer<typeof submissionZodSchema>;


