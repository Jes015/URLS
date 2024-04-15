'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BaseComponentType } from "@/models/component.model"
import { checkAuthStatus } from "@/services/server/auth.server-service"
import { useEffect, useState } from "react"

export const AuthModal: BaseComponentType = () => {

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const handleOnLoadPage = async () => {
            const isAuth = await checkAuthStatus()
            
            if (isAuth == null) {
                handleOnDialogChange()
            }
        }

        void handleOnLoadPage()
    }, [])

    const handleOnDialogChange = () => {
        setModalOpen(prev => !prev)
    }

    return (
        <Dialog open={modalOpen} onOpenChange={handleOnDialogChange}>
            <DialogContent className="font-sans">
                <DialogHeader>
                    <DialogTitle>Add a link</DialogTitle>
                    <DialogDescription>
                        The url will be copied to your clipboard when you click add
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}