'use client'
import { CircularLoading } from "@/components/ui/CircularLoading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { BaseComponentType } from "@/models/component.model"
import { ToastType } from "@/models/toast.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { signOut } from "@/services/server/auth.server-service"
import { TabsList } from "@radix-ui/react-tabs"
import { useState } from "react"
import { toast } from "sonner"
import { SignInForm } from "./components/SignInForm"
import { SignUpForm } from "./components/SignUpForm"
import { useAuthModal } from "./hooks/useAuthModal"

export const AuthModal: BaseComponentType = () => {
    const { isAuth, toggleIsAuth, modalOpen, toggleModalStatus } = useAuthModal()
    const [loading, setLoading] = useState(false)

    const handleOnDialogChange = () => {
        toggleModalStatus()
    }

    const handleOnClickToSignOut = async () => {
        setLoading(true)
        const { message, statusCode } = await signOut()

        setLoading(false)

        let toastType: ToastType = 'success'

        if (199 <= statusCode && statusCode >= 300) {
            toastType = 'error'
        } else {
            authModalService.sendMessage({ detail: false })
            toggleIsAuth(false)
        }


        toast[toastType](message)
    }

    return (
        <Dialog open={modalOpen} onOpenChange={handleOnDialogChange}>
            <DialogContent className="font-sans">
                <DialogHeader className="overflow-hidden">
                    <DialogTitle>Auth</DialogTitle>
                </DialogHeader>
                {
                    isAuth && (
                        <Button
                            className="flex-grow"
                            disabled={loading}
                            onClick={handleOnClickToSignOut}
                        >
                            {
                                loading ? <div className="scale-75"><CircularLoading /></div> : 'Sign out'
                            }
                        </Button>
                    )
                }
                {
                    !isAuth && (
                        <Tabs defaultValue="Sign in">
                            <TabsList className="flex gap-2">
                                <TabsTrigger className='border border-transparent  data-[state=active]:border-neutral-300' value="Sign in">Sign in</TabsTrigger>
                                <TabsTrigger className='border border-transparent  data-[state=active]:border-neutral-300' value="Sign up">Sign up</TabsTrigger>
                            </TabsList>
                            <TabsContent value="Sign in">
                                <SignInForm />
                            </TabsContent>
                            <TabsContent value="Sign up">
                                <SignUpForm />
                            </TabsContent>
                        </Tabs>
                    )
                }
            </DialogContent>
        </Dialog>
    )
}