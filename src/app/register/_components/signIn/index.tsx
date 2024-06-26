'use client'
import { redirect } from 'next/navigation'
import { createUser } from '@/api'
import { Form } from './_components/form'
import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'
const loginTokenAtom = atomWithStorage('loginToken', '')
export const Login: React.FC = () => {
  const [loginToken, _] = useAtom(loginTokenAtom)
  const getRegistered = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const user = await createUser(loginToken, email, password)
      if (user !== undefined) {
        alert('登録しました')
        redirect('/login')
      }
    } catch (e) {
      console.error(e)
    }
  }
  return <Form submitFunction={getRegistered} />
}
