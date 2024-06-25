'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAllTanzakus, removeTanzaku } from '@/api'
import { Button } from '@/components/Button'
import styles from './index.module.scss'

type Params = {
  eventId: string
}

type TanzakuType = {
  id: string
  textLine1: string
  textLine2?: string
  nameLine: string
  disabled: boolean
}

export const Details: React.FC<Params> = ({ eventId }) => {
  // const [loginToken, _] = useAtom(loginTokenAtom)
  const loginToken =
    document.cookie
      .split(';')
      .find((c) => {
        return c.trim().startsWith('loginToken=')
      })
      ?.split('=')[1] || ''
  const [tanzakus, setTanzskus] = useState([] as TanzakuType[])
  useEffect(() => {
    const tanzakus = async () => {
      try {
        const data = await getAllTanzakus(loginToken, eventId)
        if (data !== undefined) {
          setTanzskus(data)
        }
      } catch (e) {
        console.error(e)
      }
    }
    tanzakus().catch((e) => {
      console.error(e)
    })
  }, [loginToken, eventId])

  const tanzakuDelete = async (id: string) => {
    if (!window.confirm('削除しますか？')) {
      return
    }
    const removeAction = await removeTanzaku(loginToken, id)
    if (removeAction !== undefined) {
      window.location.reload()
    }
  }
  return (
    <>
      <Link href={`/events/${eventId}/SubmitTanzaku`}>
        <Button>短冊を作成</Button>
      </Link>
      <h2>短冊一覧</h2>
      {tanzakus.map((tanzaku) => {
        if (!tanzaku.disabled) {
          return (
            <div key={tanzaku.id} className={styles.tanzaku}>
              <p>{tanzaku.textLine1}</p>
              <p>{tanzaku.textLine2}</p>
              <p>{tanzaku.nameLine}</p>
              <p>{tanzaku.disabled}</p>
              <Button
                onClick={async () => {
                  await tanzakuDelete(tanzaku.id)
                }}
              >
                表示削除
              </Button>
            </div>
          )
        }
      })}
      <hr />
      <h2>削除された短冊の一覧</h2>
      {tanzakus.map((tanzaku) => {
        if (tanzaku.disabled) {
          return (
            <div key={tanzaku.id} className={styles.tanzaku}>
              <p>{tanzaku.textLine1}</p>
              <p>{tanzaku.textLine2}</p>
              <p>{tanzaku.nameLine}</p>
              <p>{tanzaku.disabled}</p>
            </div>
          )
        }
      })}
    </>
  )
}
