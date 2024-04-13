'use client'
import LinearLoading from '@/components/ui/LinearLoading/LinearLoading'
import { Suspense } from 'react'
import { useGlobalLoader } from './hooks'

export const GlobalLoader = () => {
  const { isLoaderVisible } = useGlobalLoader()

  return (
    <Suspense>
        {isLoaderVisible && <LinearLoading classNameRoot='fixed w-full top-0 left-0 z-[500] h-[1rem]' />}
    </Suspense>
  )
}
