'use client'
import { CreateEventForm } from './_components/createEventForm'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>イベント作成</h1>
      <CreateEventForm />
    </main>
  )
}
