'use client'

import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import Link from 'next/link'
import { Button } from '@/components/Button'

const loginTokenAtom = atomWithStorage('loginToken', '')
export const Logout: React.FC = () => {
  const [loginToken, setLoginToken] = useAtom(loginTokenAtom)
  if (loginToken !== '') {
    setLoginToken('')
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
