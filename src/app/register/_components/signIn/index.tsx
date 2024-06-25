'use client'
import { redirect } from 'next/navigation'
import { createUser } from '@/api'
import { Form } from './_components/form'
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
