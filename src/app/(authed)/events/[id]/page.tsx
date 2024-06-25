import { Details } from './_components/Details'
import styles from './page.module.scss'

export const runtime = 'edge'

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <main className={styles.main}>
      <h1>イベント詳細</h1>
      <p>イベント ID: {params.id}</p>
      <hr />
      <Details eventId={params.id} />
    </main>
  )
}
