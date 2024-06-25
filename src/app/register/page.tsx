import Link from 'next/link'
import { Login } from './_components/signIn'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>アカウント登録</h1>
      <Login />
      <p>
        すでにアカウントをお持ちですか?
        <Link href="/login" style={{ textDecoration: 'underline' }}>
          ログインする
        </Link>
      </p>
    </main>
  )
}
