import Link from 'next/link'
import styles from './page.module.scss'
import { Unauthed } from './_components/unauthed'

export default function Home() {
  return (
    <main className={styles.main}>
      <Unauthed />
      <h2>管理画面ログイン</h2>
      <Link href="/login">ログイン</Link>
    </main>
  )
}
