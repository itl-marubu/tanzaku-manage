import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>管理画面ログイン</h2>
      <Link href="/login">ログイン</Link>
    </main>
  )
}
