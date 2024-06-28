import { IconLink } from '@/components/Icons/generated'
import { Details } from './_components/Details'
import styles from './page.module.scss'
import Link from 'next/link'

export const runtime = 'edge'

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <main className={styles.main}>
      <h1>イベント詳細</h1>
      <p>
        イベント ID:
        <Link href={'https://tanzak.pages.dev/' + params.id} target="_blank">
          <IconLink />
          {params.id}
        </Link>
      </p>
      <hr />
      <Details eventId={params.id} />
    </main>
  )
}
