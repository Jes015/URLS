import { type BaseComponentProps } from '@/models/component.model'
import { forwardRef } from 'react'

interface SheetProps extends BaseComponentProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  component?: React.FC<unknown>
}

export type PartialSheetProps = Partial<SheetProps>

export const Sheet: React.FC<SheetProps> = forwardRef(
  ({ children, className, as, href, component, onClick }, ref) => {
    const SheetRootComponent = (component ?? as) ?? 'div'

    return (
      // @ts-expect-error expected error by polymorphic component
      <SheetRootComponent
        className={[
          'bg-white border rounded-sm shadow-sm text-sm p-1 relative overflow-hidden',
          className
        ].join(' ')}
        {...{ href, onClick }}
      >
        {children}
      </SheetRootComponent>
    )
  }
)
Sheet.displayName = 'Sheet'