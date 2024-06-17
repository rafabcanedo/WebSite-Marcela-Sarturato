import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const title = tv({
  base: 'font-body text-2xl cursor-pointer',
  variants: {
    color: {
      default: 'text-primary',
      white: 'text-white',
    },
    background: {
      true: 'bg-primary/70 w-[400px]',
    },
    decoration: {
      true: 'text-decoration underline',
    },
  },
  defaultVariants: {
    color: 'default',
    background: false,
    decoration: false,
  },
})

export type TitleProps = ComponentProps<'h2'> & VariantProps<typeof title>

export function Title({
  color,
  background,
  decoration,
  className,
  ...props
}: TitleProps) {
  return (
    <h2 className={title({ color, background, decoration, className })}>
      {props.children}
    </h2>
  )
}
