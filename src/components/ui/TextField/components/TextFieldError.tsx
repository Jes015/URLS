import { type BaseComponentType } from '@/models/component.model'
import clsx from 'clsx'

export const TextFieldError: BaseComponentType = ({ className, children, ...props }) => {
  return (
    <span
      className={
        clsx(
          'text-xs font-medium pt-1 text-red-400 self-end min-h-2 line-clamp-1',
          className
        )
      }
      {...props}
    >
      {children}
    </span>
  )
}
