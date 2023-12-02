import { z } from "zod";

export const schemaContact = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string(),
})

export type contactData = z.infer<typeof schemaContact>