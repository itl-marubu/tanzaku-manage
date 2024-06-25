'use client'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEffect, useState } from 'react'
import { getAllProjects } from '@/api'
import { Button } from '@/components/Button'
import styles from './style.module.scss'
import Link from 'next/link'

const loginTokenAtom = atomWithStorage('loginToken', '')
export const Events: React.FC = () => {
  type ProjectsType = {
    id: string
    name: string
    description: string
    ownerId: string
  }
  const [loginToken, _] = useAtom(loginTokenAtom)

  const [events, setEvents] = useState<ProjectsType[]>([] as ProjectsType[])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllProjects(loginToken)
        if (data !== undefined) {
          setEvents(data)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetchEvents().catch((e) => {
      console.error(e)
    })
  }, [loginToken])

  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.id} className={styles.eventWrap}>
            <p className={styles.eventName}>{event.name}</p>
            <p className={styles.eventDetails}>{event.description}</p>
            <Link href={`/events/${event.id}`}>
              <Button className={styles.button}>詳細</Button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
