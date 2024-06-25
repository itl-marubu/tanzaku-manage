import Link from 'next/link'
import { Button } from '@/components/Button'
import { Events } from './_components/events'
import styles from './page.module.scss'

export default function EventList() {
  return (
    <main className={styles.main}>
      <h1>短冊展示イベント一覧</h1>
      <Link href="/events/create">
        <Button>イベントの作成</Button>
      </Link>
      <hr />
      <Events />
    </main>
  )
}
