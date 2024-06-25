'use client'
import { redirect } from 'next/navigation'
import { Form } from './_components/form'
import { createUser } from '@/api'
export const Login: React.FC = () => {
  const getRegistered = async ({
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }) => {
    try {
      const user = await createUser(email, password)
      if (user !== undefined) {
        redirect('/login')
      }
    } catch (e) {
      console.error(e)
    }
  }
  return <Form submitFunction={getRegistered} />
}
