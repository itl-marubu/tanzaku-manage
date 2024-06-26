'use client'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { redirect } from 'next/navigation'
import { createUser } from '@/api'
import { Form } from './_components/form'
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
