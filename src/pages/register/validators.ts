import { z } from "zod"

export const schemaRegister = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string(),
    password: z.string().min(8),
  });

export type registerData = z.infer<typeof schemaRegister>