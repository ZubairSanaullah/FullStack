import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

export function Card({title, children, footer}: CardProps) {
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </div>
  )
}
