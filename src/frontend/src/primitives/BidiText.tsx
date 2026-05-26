import { ReactNode } from 'react'
import { css, cx } from '@/styled-system/css'

type BidiTextProps = {
  children: ReactNode
  className?: string
}

const bidiTextStyle = css({
  unicodeBidi: 'plaintext',
})

export const LtrText = ({ children, className }: BidiTextProps) => {
  return (
    <span dir="ltr" translate="no" className={cx(bidiTextStyle, className)}>
      {children}
    </span>
  )
}

