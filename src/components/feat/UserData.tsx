import { BaseComponentType } from "@/models/component.model"
import { authModalService } from "@/services/client/auth-modal.service"
import { createClient } from "@/utils/supabase/server"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { UserButton } from "./UserButton"

export const UserData: BaseComponentType = async () => {
    const supabase = createClient()
    const { data: authResponse } = await supabase.auth.getUser()

    const handleOnClickToDisplayAuthModal = () => {
        authModalService.sendMessage({ detail: true })
    }

    return (
        <TooltipProvider>
            <Tooltip open={authResponse.user?.email != null}>
                <TooltipTrigger asChild>
                    <UserButton />
                </TooltipTrigger>
                <TooltipContent side="right">
                    <div>
                        <span>{authResponse.user?.email}</span>
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}