import { useDebounce } from "@/hooks/useDebounce"
import { useRouting } from "@/hooks/useRouting"
import { globalLoaderStateService } from "@/services/client/global-loader.service"
import { createClient } from "@/utils/supabase/client"
import { useEffect } from "react"

export const useDashboardSearchField = (currentSearchValue: string) => {
    const { debouncedValue } = useDebounce(currentSearchValue, 484)
    const { goTo } = useRouting()

    useEffect(() => {

        const executionContext = async () => {
            const supabase = createClient()

            const { data: userResponse } = await supabase.auth.getUser()

            if (userResponse.user == null) return
            
            const newUrl = new URL(location.href)

            if (debouncedValue === '') {
                newUrl.searchParams.delete('q')
            }
            else {
                newUrl.searchParams.set('q', debouncedValue)
            }

            goTo(newUrl.href)

            if (debouncedValue === '') {
                globalLoaderStateService.sendMessage({ detail: false })
            }
        }

        void executionContext()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return { searchValue: debouncedValue }
}