import { authModalService } from "@/services/client/auth-modal.service"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export const useAuthModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const supabase = createClient()

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            console.log({ event, session})
            if (event === 'SIGNED_IN') {
                toggleIsAuth(true)
                toggleModalStatus(false)
            } else if (event === 'SIGNED_OUT') {
                toggleModalStatus(true)
                toggleIsAuth(false)
            } else if (event === 'INITIAL_SESSION' && session == null) {
                toggleModalStatus(true)
            }
        })

        return () => {
            data.subscription.unsubscribe()
        }
    }, [])

    useEffect(() => {
        authModalService.listenEvent((data) => {
            let newVisibility: boolean | undefined

            if (typeof data?.detail === 'boolean') {
                newVisibility = data.detail
            }

            toggleModalStatus(newVisibility)
        })
    }, [])

    const toggleModalStatus = (newValue?: boolean) => {
        setModalOpen(prev => newValue ?? !prev)
    }

    const toggleIsAuth = (newValue?: boolean) => {
        setIsAuth(prev => newValue ?? !prev)
    }

    return { isAuth, toggleIsAuth, modalOpen, toggleModalStatus }
}