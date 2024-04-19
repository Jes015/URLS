'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { BaseComponentType } from "@/models/component.model"
import { TabsList } from "@radix-ui/react-tabs"
import { SignInForm } from "./components/SignInForm"
import { SignUpForm } from "./components/SignUpForm"
import { useAuthModal } from "./hooks/useAuthModal"

export const AuthModal: BaseComponentType = () => {
    const { modalOpen, toggleModalStatus } = useAuthModal()

    const handleOnDialogChange = () => {
        toggleModalStatus()
    }

    return (
        <Dialog open={modalOpen} onOpenChange={handleOnDialogChange}>
            <DialogContent className="font-sans">
                <DialogHeader className="overflow-hidden">
                    <DialogTitle>Auth</DialogTitle>
                </DialogHeader>
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
            </DialogContent>
        </Dialog>
    )
}