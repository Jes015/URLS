'use client'
import { BaseComponentType } from "@/models/component.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { PersonIcon } from "@radix-ui/react-icons"

export const UserButton: BaseComponentType = () => {

    const handleOnClickToDisplayAuthModal = () => {
        authModalService.sendMessage({ detail: true })
    }

    return (
        <button
            className="bg-black/90 text-white p-2 rounded-full"
            onClick={handleOnClickToDisplayAuthModal}
        >
            <PersonIcon width={20} height={20} />
        </button>
    )
}