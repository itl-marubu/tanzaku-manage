import { TanzakuForm } from './_components/tanzakuForm'
import styles from './page.module.scss'

export const runtime = 'edge'

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <main className={styles.main}>
      <h1>短冊の登録</h1>
      <p>イベント ID: {params.id}</p>
      <hr />
      <TanzakuForm eventId={params.id} />
    </main>
  )
}
