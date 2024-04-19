'use client'
import { CircularLoading } from "@/components/ui/CircularLoading"
import { TextField } from "@/components/ui/TextField/TextField"
import { TextFieldError } from "@/components/ui/TextField/components/TextFieldError"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouting } from "@/hooks/useRouting"
import { BaseComponentType } from "@/models/component.model"
import { ToastType } from "@/models/toast.model"
import { addLink } from "@/services/server/links.server-service"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { InputsDashboardFormSchemaType, inputsDashboardForm, inputsDashboardFormSchema } from "./models/dashboard-form.model"

export const DashboardForm: BaseComponentType = (props) => {
    const [loading, setLoading] = useState(false)
    const { refresh } = useRouting()

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
    }
        = useForm<InputsDashboardFormSchemaType>({
            resolver: zodResolver(inputsDashboardFormSchema)
        })

    const handleOnSubmit = handleSubmit(async (formData) => {
        setLoading(true)
        const { message, statusCode } = await addLink(formData)

        let toastType: ToastType = 'success'

        if (statusCode <= 199 || statusCode >= 300) {
            toastType = 'error'
        } else {
            reset()
            refresh()
        }

        setLoading(false)

        toast[toastType](message)
    })

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
                    {...register(inputsDashboardForm.realurl)}
                />
                <TextFieldError>
                    {errors[inputsDashboardForm.realurl]?.message}
                </TextFieldError>
            </TextField>
            <TextField>
                <TextField.Label>
                    URLS name
                </TextField.Label>
                <Input
                    placeholder="MyCustomLink"
                    {...register(inputsDashboardForm.urlsid)}
                />
                <TextFieldError>
                    {errors[inputsDashboardForm.urlsid]?.message}
                </TextFieldError>
            </TextField>
            <Button
                className="self-end !px-8"
                disabled={loading}
            >
                {
                    loading ? <div className="scale-75"><CircularLoading /></div> : 'Add'
                }
            </Button>
        </form>
    )
}