import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const TextFieldError: BaseComponentType = ({ className, hidden, children, ...props }) => {
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
      {hidden != null && children}
    </span>
  )
}
