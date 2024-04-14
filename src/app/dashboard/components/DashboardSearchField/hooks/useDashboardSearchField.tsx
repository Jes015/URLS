import { useDebounce } from "@/hooks/useDebounce"
import { useRouting } from "@/hooks/useRouting"
import { globalLoaderStateService } from "@/services/client/global-loader.service"
import { useEffect } from "react"

export const useDashboardSearchField = (currentSearchValue: string) => {
    const { debouncedValue } = useDebounce(currentSearchValue, 484)
    const { goTo } = useRouting()

    useEffect(() => {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return { searchValue: debouncedValue }
}