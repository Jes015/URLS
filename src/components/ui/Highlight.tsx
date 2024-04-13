import { type BaseComponentProps } from '@/models/component.model'
import clsx from 'clsx'
import { type FC } from 'react'

interface HighlightProps extends BaseComponentProps {
  variant: 'bg' | 'underline' | 'waves' | 'dotted' | 'none'
}

export type HighlightPropsPartial = Partial<HighlightProps>

export const Highlight: FC<HighlightProps> = ({ className, variant, ...props }) => {
  return (
        <span
            className={
                clsx(
                  variant === 'bg' && 'bg-[#0f172a] text-white',
                  variant === 'underline' && 'underline decoration-[#0f172a]',
                  variant === 'waves' && '[text-decoration-line:grammar-error] decoration-[#0f172a]',
                  variant === 'dotted' && 'underline decoration-dotted decoration-[#0f172a]',
                  className
                )
            }
            {...props}
        />
  )
}