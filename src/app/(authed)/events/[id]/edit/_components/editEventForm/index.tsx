'use client'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getEachProject, updateProject } from '@/api'
import { Button } from '@/components/Button'
import styles from './index.module.scss'

type FieldValues = {
  name: string
  description: string
  noticeLarge?: string
  noticeQR?: string
}

type Props = {
  id: string
}

const loginTokenAtom = atomWithStorage('loginToken', '')

export const EditEventForm: React.FC<Props> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>()

  const [loginToken, _] = useAtom(loginTokenAtom)
  const [eventInfo, setEventInfo] = useState({} as FieldValues)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await updateProject(
      loginToken,
      id,
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
      location.href = '/events/' + id
    }
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await getEachProject(id).catch((e) => {
        console.error(e)
        alert('取得に失敗しました')
      })
      if (res !== undefined) {
        setEventInfo(res)
      }
    }
    fetchEvent().catch((e) => {
      console.error(e)
      alert('取得に失敗しました')
    })
  }, [id])

  useEffect(() => {
    reset(eventInfo)
  }, [eventInfo, reset])

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
