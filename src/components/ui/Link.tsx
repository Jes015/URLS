'use client'
import { globalLoaderStateService } from '@/components/GlobalLoader/services'
import { BaseComponentProps } from '@/models/component.model'
import DefaultLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface Props extends Omit<BaseComponentProps, 'onClick' | 'onMouseEnter'| 'onTouchStart' >, LinkProps {
}

export const Link: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, ...props }, ref) => {

    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const someInvalidKeyPressed = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey

      if (someInvalidKeyPressed) return

      const linkPathname = href
      const actualPathname = location.pathname

      if (linkPathname === actualPathname) return
      globalLoaderStateService.sendMessage({ detail: true })
    }

    return (
      <DefaultLink
        onClick={handleOnClick}
        className={
          [
            'text-blue-400 hover:underline font-medium',
            className
          ].join(' ')
        }
        {...{ props, href, ref }}
      >
        {children}
      </DefaultLink>
    )
  }
)

Link.displayName = 'Link'