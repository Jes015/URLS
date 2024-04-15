'use client'
import { BaseComponentType } from "@/models/component.model"
import { Toaster } from 'sonner'
import { GlobalLoader } from "./GlobalLoader/GlobalLoader"

export const GlobalClientComponents: BaseComponentType = () => {
    return (
        <>
            <Toaster />
            <GlobalLoader />
        </>
    )
}