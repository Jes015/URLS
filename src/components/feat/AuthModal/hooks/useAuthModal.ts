import { authModalService } from "@/services/client/auth-modal.service"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export const useAuthModal = () => {
    const [modalOpen, setModalOpen] = useState(false)


    useEffect(() => {
        const supabase = createClient()

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'SIGNED_IN') {
                toggleModalStatus(false)
            } else if (event === 'SIGNED_OUT') {
                toggleModalStatus(true)
            } else if (event === 'INITIAL_SESSION' && session == null){
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

    return { modalOpen, toggleModalStatus }
}