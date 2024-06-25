import { Login } from './_components/login'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <Login />
    </main>
  )
}
