import type { SVGProps } from 'react'

export { default as IconAddCircle } from './AddCircle'
export { default as IconDelete } from './Delete'
export { default as IconSettings } from './Settings'
export { default as IconClose } from './Close'
export { default as IconEdit } from './Edit'
export { default as IconLink } from './Link'
export { default as IconMenu } from './Menu'

export type IconComponent = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => React.JSX.Element
