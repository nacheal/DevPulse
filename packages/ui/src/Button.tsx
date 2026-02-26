import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors'
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {props.children}
    </button>
  )
}
