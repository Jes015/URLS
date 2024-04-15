'use client'
import { BaseComponentType } from "@/models/component.model"
import { Toaster } from 'sonner'
import { AuthModal } from "./AuthModal"
import { GlobalLoader } from "./GlobalLoader/GlobalLoader"

export const GlobalClientComponents: BaseComponentType = () => {
    return (
        <>
            <Toaster />
            <AuthModal />
            <GlobalLoader />
        </>
    )
}