import type { SVGProps } from 'react'

export { default as IconClose } from './Close'
export { default as IconMenu } from './Menu'

export type IconComponent = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => React.JSX.Element
