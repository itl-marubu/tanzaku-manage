import { PropsWithChildren } from 'react'
import { Authed } from './_components/authed'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Authed />
      {children}
    </>
  )
}

export default Layout
