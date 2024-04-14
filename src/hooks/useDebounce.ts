import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, wait: number = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const callback = () => {
      setDebouncedValue(value)
    }
    const timeout = setTimeout(callback, wait)

    return () => {
      clearTimeout(timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return { debouncedValue }
}