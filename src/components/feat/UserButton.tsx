'use client'
import { BaseComponentProps } from "@/models/component.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { PersonIcon } from "@radix-ui/react-icons"
import { forwardRef } from "react"

export const UserButton = forwardRef<HTMLButtonElement, BaseComponentProps>(
    ({ onClick, ...props }, ref) => {
        const handleOnClickToDisplayAuthModal = () => {
            authModalService.sendMessage({ detail: true })
        }

        return (
            <button
                className="bg-black/90 text-white p-2 rounded-full"
                onClick={handleOnClickToDisplayAuthModal}
                {...{ ...props, ref }}
            >
                <PersonIcon width={20} height={20} />
            </button>
        )
    }
)

UserButton.displayName = 'UserButton'