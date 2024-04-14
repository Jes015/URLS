'use client'
import { globalLoaderStateService } from '@/services/client/global-loader.service'
import { usePathname, useRouter } from 'next/navigation'

export const useRouting = () => {
  const currentPathname = usePathname()
  const navigation = useRouter()

  const goTo = (url: string, scroll: boolean = true) => {
    globalLoaderStateService.sendMessage({ detail: true })
    navigation.push(url, { scroll })
  }

  const goBack = () => {
    navigation.back()
    globalLoaderStateService.sendMessage({ detail: true })
  }

  const goForward = () => {
    navigation.forward()
    globalLoaderStateService.sendMessage({ detail: true })
  }

  const replace = (url: string) => {
    navigation.replace(url)
    globalLoaderStateService.sendMessage({ detail: true })
  }

  const refresh = () => {
    navigation.refresh()
  }

  const currentPathnameFormatted = currentPathname.slice(1).replaceAll('/', ' / ')

  return { currentPathname, currentPathnameFormatted, goBack, goForward, goTo, replace, refresh }
}