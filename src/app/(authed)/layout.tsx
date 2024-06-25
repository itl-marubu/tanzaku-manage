import { PropsWithChildren } from 'react'
import { Authed } from './_components/authed'

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <Authed />
      {children}
    </>
  )
}

export default Layout
