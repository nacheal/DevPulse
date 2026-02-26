import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'

  const variantStyles =
    variant === 'primary'
      ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-md)] border border-transparent'
      : 'bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--border-light)]'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {props.children}
    </button>
  )
}
