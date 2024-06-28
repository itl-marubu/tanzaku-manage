import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createProject } from '@/api'
import { Button } from '@/components/Button'
import styles from './index.module.scss'

type FieldValues = {
  name: string
  description: string
  noticeLarge?: string
  noticeQR?: string
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
    const res = await createProject(
      loginToken,
      data.name,
      data.description,
      data.noticeLarge,
      data.noticeQR,
    ).catch((e) => {
      console.error(e)
      alert('作成に失敗しました')
    })
    if (res !== undefined) {
      alert('作成しました')
      location.href = '/events'
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
      <div className={styles.inputWrap}>
        <label htmlFor="noticeLarge" className={styles.label}>
          お知らせ（大）
        </label>
        <textarea {...register('noticeLarge')} className={styles.input} />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor="noticeQR" className={styles.label}>
          お知らせ（QR）
        </label>
        <input {...register('noticeQR')} className={styles.input} />
      </div>

      <Button type="submit">作成</Button>
    </form>
  )
}
