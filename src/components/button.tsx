import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center text-sm rounded bg-primary font-body text-white hover:bg-hover',
  variants: {
    size: {
      default: 'h-10 px-8',
      xl: 'h-12 px-16',
      lg: 'h-8 px-6',
      sm: 'h-8 px-4',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ size, className, ...props }: ButtonProps) {
  return (
    <button className={button({ size, className })}>{props.children}</button>
  )
}
