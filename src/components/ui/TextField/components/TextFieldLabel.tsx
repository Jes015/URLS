import { BaseComponentType } from '@/models/component.model'
import clsx from 'clsx'

export const TextFieldLabel: BaseComponentType = ({ children, className }) => {
  return (
        <span
            className={
              clsx(
                'text-sm font-medium',
                className
              )
            }
        >
            {children}
        </span>
  )
}
