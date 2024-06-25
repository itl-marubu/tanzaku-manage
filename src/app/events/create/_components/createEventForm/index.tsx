import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { redirect } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './index.module.scss'
import { createProject } from '@/api'
import { Button } from '@/components/Button'

type FieldValues = {
  name: string
  description: string
}

const loginTokenAtom = atomWithStorage('loginToken', '')

export const CreateEventForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const [loginToken, _] = useAtom(loginTokenAtom)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createProject(loginToken, data.name, data.description)
      if (res !== undefined) {
        alert('作成しました')
        redirect('/events')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrap}>
      <div className={styles.inputWrap}>
        <label htmlFor="name" className={styles.label}>
          イベント名
        </label>
        <input
          {...register('name', { required: true })}
          className={styles.input}
        />
        {errors.name && <span>イベント名を入力してください</span>}
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor="description" className={styles.label}>
          説明
        </label>
        <textarea
          {...register('description', { required: true })}
          className={styles.input}
        />
        {errors.description && <span>説明を入力してください</span>}
      </div>

      <Button type="submit">作成</Button>
    </form>
  )
}
