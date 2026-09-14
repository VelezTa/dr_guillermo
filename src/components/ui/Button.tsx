import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'on-dark' | 'ghost-dark'

interface ButtonLinkProps extends Omit<ComponentProps<'a'>, 'children'> {
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
  external?: boolean
}

const variantClass: Record<Variant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  'on-dark': 'btn btn-on-dark',
  'ghost-dark': 'btn btn-ghost-dark',
}

/** Enlace con apariencia de botón. Los enlaces externos se abren en pestaña nueva de forma segura. */
export function ButtonLink({ variant = 'primary', icon, children, external, className = '', ...rest }: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={`${variantClass[variant]} ${className}`} {...externalProps} {...rest}>
      <span>{children}</span>
      {icon ? (
        <span className="btn-icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  )
}
