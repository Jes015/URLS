import { authModalService } from "@/services/client/auth-modal.service"
import { getUserServer } from "@/services/server/auth.server-service"
import { useEffect, useState } from "react"

export const useAuthModal = () => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const handleOnLoadPage = async () => {
            const isAuth = await getUserServer()

            if (isAuth == null) {
                toggleModalStatus(true)
            }
        }

        void handleOnLoadPage()
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