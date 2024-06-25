'use client'

import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const authedAtom = atomWithStorage('loggedIn', true)
export const Authed: React.FC = () => {
  const [authed, setAuthed] = useAtom(authedAtom)

  useEffect(() => {
    if (!authed) {
      console.log(authed)
      redirect('/login')
    }
  }, [authed])

  return <></>
}
