'use client'
import { TextField } from "@/components/ui/TextField/TextField"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { BaseComponentType } from "@/models/component.model"
import { ToastType } from "@/models/toast.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { signIn, signUp } from "@/services/server/auth.server-service"
import { useState } from "react"
import { toast } from "sonner"
import { useAuthModal } from "./hooks/useAuthModal"

export const AuthModal: BaseComponentType = () => {
    const [loading, setLoading] = useState(false)
    const { modalOpen, toggleModalStatus } = useAuthModal()

    const handleOnDialogChange = () => {
        toggleModalStatus()
    }

    const handleOnSubmitToSignIn = async () => {
        setLoading(true)
        const response = await signIn(
            {
                email: 'jes.18.sin.15@gmail.com',
                password: 'Sintia15'
            }
        )

        setLoading(false)

        let toastType: ToastType = 'success'

        if (199 <= response.statusCode && response.statusCode >= 300) {
            toastType = 'error'
        } else {
            authModalService.sendMessage({ detail: false })
        }


        toast[toastType](response.message)
    }

    const handleOnSubmitToSignUp = async () => {
        setLoading(true)
        const response = await signUp({ email: 'jes.18.sin.15@gmail.com', password: 'password123123' })
        setLoading(false)
        
        let toastType: ToastType = 'success'

        if (199 <= response.statusCode && response.statusCode >= 300) {
            toastType = 'error'
        }

        toast[toastType](response.message)
    }

    return (
        <Dialog open={modalOpen} onOpenChange={handleOnDialogChange}>
            <DialogContent className="font-sans">
                <DialogHeader className="overflow-hidden">
                    <DialogTitle>Auth</DialogTitle>
                </DialogHeader>
                <form action="">
                    <TextField className="space-y-1">
                        <TextField.Label>Email</TextField.Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                    </TextField>
                    <TextField className="space-y-1">
                        <TextField.Label>Password</TextField.Label>
                        <Input id="password" defaultValue="@peduarte" />
                    </TextField>
                </form>
                <div className="flex gap-2">
                    <Button
                        className="flex-grow"
                        onClick={handleOnSubmitToSignIn}
                        disabled={loading}
                    >
                        {
                            loading ? <div className="scale-75"><div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-white"></div></div> : 'Sign in'
                        }
                    </Button>
                    <Button
                        disabled={loading}
                        onClick={handleOnSubmitToSignUp}
                    >
                        {
                            loading ? <div className="scale-50"><div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-white"></div></div> : 'Sign up'
                        }
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}