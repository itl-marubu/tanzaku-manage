'use client'
import { decodeJwt } from 'jose'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { redirect } from 'next/navigation'
import { login } from '@/api'
import { Form } from './form'

const loginTokenAtom = atomWithStorage('loginToken', '')
const isLoggedInAtom = atomWithStorage('loggedIn', true)
const validThruAtom = atomWithStorage('valid', '')
export const Login: React.FC = () => {
  const [loginToken, setloginToken] = useAtom(loginTokenAtom)
  const [, setLoggedinToken] = useAtom(isLoggedInAtom)
  const [, setValidThru] = useAtom(validThruAtom)
  if (typeof document !== 'undefined') {
    document.cookie = `loginToken=${loginToken}; expires=${new Date(
      new Date().getTime() + 1000 * 60 * 60,
    ).toUTCString()}; path=/;`
  }

  if (loginToken !== '') {
    redirect('/events')
  }

  const getLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const data = await login(email, password)
      if (data !== undefined) {
        setloginToken(`${data}`)
        setLoggedinToken(true)
        const decoded = decodeJwt(`${data}`)
        setValidThru(`${decoded?.exp}`)
        location.reload()
      }
    } catch (e) {
      console.error(e)
    }
  }

  return <Form submitFunction={getLogin} />
}
