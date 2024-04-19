import { CircularLoading } from "@/components/ui/CircularLoading"
import { TextField } from "@/components/ui/TextField/TextField"
import { TextFieldError } from "@/components/ui/TextField/components/TextFieldError"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BaseComponentType } from "@/models/component.model"
import { ToastType } from "@/models/toast.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { signIn } from "@/services/server/auth.server-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { AuthModalFormSchemaType, authModalFormInputs, authModalFormSchema } from "../models/auth-modal-form.model"

export const SignInForm: BaseComponentType = ({ className, ...props }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthModalFormSchemaType>({ resolver: zodResolver(authModalFormSchema) })
    const [loading, setLoading] = useState(false)

    const handleOnSubmit = handleSubmit(async (data) => {
        setLoading(true)
        const response = await signIn(data)

        setLoading(false)

        let toastType: ToastType = 'success'

        if (199 <= response.statusCode && response.statusCode >= 300) {
            toastType = 'error'
        } else {
            authModalService.sendMessage({ detail: false })
        }


        toast[toastType](response.message)
    })

    return (
        <form onSubmit={handleOnSubmit}>
            <TextField className="space-y-1">
                <TextField.Label>Email</TextField.Label>
                <Input placeholder="ellindo@gmail.com" {...register(authModalFormInputs.email)} />
                <TextFieldError>
                    {errors[authModalFormInputs.email]?.message}
                </TextFieldError>
            </TextField>
            <TextField className="space-y-1">
                <TextField.Label>Password</TextField.Label>
                <Input type="password" placeholder="password4323" {...register(authModalFormInputs.password)} />
                <TextFieldError>
                    {errors[authModalFormInputs.password]?.message}
                </TextFieldError>
            </TextField>
            <div className="flex gap-2">
                <Button
                    className="flex-grow"
                    disabled={loading}
                    type="submit"
                >
                    {
                        loading ? <div className="scale-75"><CircularLoading /></div> : 'Sign in'
                    }
                </Button>
            </div>
        </form>
    )
}