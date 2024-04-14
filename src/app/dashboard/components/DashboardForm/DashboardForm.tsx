'use client'
import { TextField } from "@/components/ui/TextField/TextField"
import { TextFieldError } from "@/components/ui/TextField/components/TextFieldError"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BaseComponentType } from "@/models/component.model"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { InputsDashboardFormSchemaType, inputsDashboardForm, inputsDashboardFormSchema } from "./models/dashboard-form.model"

export const DashboardForm: BaseComponentType = (props) => {
    const [urlsName, setUrlsName] = useState('')

    const {
        register,
        formState: { errors },
        handleSubmit }
        = useForm<InputsDashboardFormSchemaType>({
            resolver: zodResolver(inputsDashboardFormSchema)
        })

    const handleOnSubmit = handleSubmit((formData) => {
        console.log(formData)
    })

    console.log({ ...errors })

    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={handleOnSubmit}
        >
            <TextField>
                <TextField.Label>
                    Link
                </TextField.Label>
                <Input
                    placeholder="https://ui.shadcn.com/docs/components/dialog"
                    {...register(inputsDashboardForm.link)}
                />
                <TextFieldError>
                    {errors[inputsDashboardForm.link]?.message}
                </TextFieldError>
            </TextField>
            <TextField>
                <TextField.Label>
                    URLS name
                </TextField.Label>
                <Input
                    placeholder="MyCustomLink"
                    {...register(inputsDashboardForm.urlName)}
                />
                <TextFieldError>
                    {errors[inputsDashboardForm.urlName]?.message}
                </TextFieldError>
            </TextField>
            <Button className="self-end !px-8">
                Add
            </Button>
        </form>
    )
}