'use client'
import { EditEventForm } from './_components/editEventForm'
import styles from './page.module.scss'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <h1>イベント編集</h1>
      <EditEventForm id={params.id} />
    </main>
  )
}
