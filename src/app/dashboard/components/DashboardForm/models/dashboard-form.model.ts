import { z } from "zod"

export const inputsDashboardForm = {
    link: 'link',
    urlName: 'urlName'
} as const


export const inputsDashboardFormSchema = z.object({
    link: z.string().url(),
    urlName: z.string().min(4)
})

export type InputsDashboardFormSchemaType = z.infer<typeof inputsDashboardFormSchema>