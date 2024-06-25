'use client'

import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import Link from 'next/link'
import { Button } from '@/components/Button'

const loginTokenAtom = atomWithStorage('loginToken', '')
const loggedInAtom = atomWithStorage('loggedIn', false)
export const Logout: React.FC = () => {
  const [loginToken, setLoginToken] = useAtom(loginTokenAtom)
  const [_, setLoggedIn] = useAtom(loggedInAtom)
  if (loginToken !== '') {
    setLoginToken('')
    setLoggedIn(false)
    window.location.reload()
  }

  return (
    <>
      <h2>ログアウトしました</h2>
      <p>再ログインするには以下のボタンを押してください。</p>
      <Link href="/login">
        <Button size="sm">ログイン</Button>
      </Link>
    </>
  )
}
