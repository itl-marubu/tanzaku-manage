import { Logout } from './_components/logout'
import Styles from './page.module.scss'

export default function Home() {
  return (
    <div className={Styles.main}>
      <Logout />
    </div>
  )
}
