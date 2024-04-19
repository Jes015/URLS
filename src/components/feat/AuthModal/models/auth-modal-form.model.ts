import { z } from "zod"

export const authModalFormInputs = {
    email: 'email',
    password: 'password'
} as const

export const authModalFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})

export type AuthModalFormSchemaType = z.infer<typeof authModalFormSchema>